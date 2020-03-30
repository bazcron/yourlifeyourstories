<template>
  <div id="app1" class="hero">
    <h2 class="vue-title">Members Page</h2>
    <div id="tab buttons" width="100%">  //div for buttons
      <button id="btnDivProfile">Members Profile </button>
      <button id="btnDivRecord">Record Story</button>
      <button id="btnDivWatch">Your Stories</button>
    </div>
//.......................................end of div for buttons
    <div id="div profile" width="100%"></div>  //put profile here
//.......................................end of profile
    <div id="tab record" width="100%">  //start of record
    <video id="vid1" controls style="width: 30%; height:50%"></video>
    <video id="vid2" controls style="width: 30%; height:50%; display:none"></video>
    <p><button id="btnStart">Start Recording</button><button id="btnStop">Stop Recording</button></p>
    <p><button id="btnSave" style="display:none">Save Recording</button><button id="btnCancel"  style="display:none">Cancel Recording</button></p>
    </div>
//.......................................end of record
    <div id="tab watch" width="100%"></div>  //put watch stories here
//.......................................end of watch stories
    </div>
</template>

<script>
import members from '@/services/members'
const mongoose = require('mongoose')
let blob = new Blob()
// import saveThisVideo from '@testvideo.webm'
export default {
  name: 'Members',
  data () {
    return {
      members: [],
      errors: []
    }
  },
  // gets members
  created () {
    this.loadMember()
  },
  methods: {
    loadMember: function () {
      members.fetchMembers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.members = response.data
          console.log(this.members)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}

let constraintObj = {
  audio: true,
  video: {
    facingMode: 'user',
    width: { min: 640, ideal: 1280, max: 1920 },
    height: { min: 480, ideal: 720, max: 1080 }
  }
}
// width: 1280, height: 720  -- preference only
// facingMode: {exact: "user"}
// facingMode: "environment"

// handle older browsers that might implement getUserMedia in some way
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {}
  navigator.mediaDevices.getUserMedia = function (constraintObj) {
    let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
    }
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraintObj, resolve, reject)
    })
  }
} else {
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      devices.forEach(device => {
        console.log(device.kind.toUpperCase(), device.label)
        //, device.deviceId
      })
    })
    .catch(err => {
      console.log(err.name, err.message)
    })
}
navigator.mediaDevices.getUserMedia(constraintObj)
  .then(function (mediaStreamObj) {
    // connect the media stream to the first video element
    let video = document.querySelector('video')
    if ('srcObject' in video) {
      video.srcObject = mediaStreamObj
    } else {
      // old version
      video.src = window.URL.createObjectURL(mediaStreamObj)
    }

    video.onloadedmetadata = function (ev) {
      // show in the video element what is being captured by the webcam
      video.play()
    }

    // add listeners for saving video/audio
    let vid2 = document.getElementById('vid2')
    let vid1 = document.getElementById('vid1')
    let start = document.getElementById('btnStart')
    let stop = document.getElementById('btnStop')
    let vidSave = document.getElementById('vid2')
    let saveVidToDB = document.getElementById('btnSave')
    let cancelVideo = document.getElementById('btnCancel')
    let mediaRecorder = new MediaRecorder(mediaStreamObj)
    let chunks = []
    // let blob = new Blob()

    start.addEventListener('click', (ev) => {
      mediaRecorder.start()
      console.log(mediaRecorder.state)
    })
    stop.addEventListener('click', (ev) => {
      mediaRecorder.stop()
      vid2.style.display = 'inline'
      vid1.style.display = 'none'
      console.log(mediaRecorder.state)
    })
    mediaRecorder.ondataavailable = function (ev) {
      chunks.push(ev.data)
    }
    mediaRecorder.onstop = (ev) => {
      blob = new Blob(chunks, { 'type': 'video/webm;' })
      chunks = []
      let videoURL = window.URL.createObjectURL(blob)
      vidSave.src = videoURL
      // saveThisVideo = blob

      saveVidToDB.style.display = 'inline'
      cancelVideo.style.display = 'inline'
      start.style.display = 'none'
      stop.style.display = 'none'
    }
    saveVidToDB.addEventListener('click', (ev) => {
      start.style.display = 'inline'
      stop.style.display = 'inline'
      saveVidToDB.style.display = 'none'
      cancelVideo.style.display = 'none'
      vid2.style.display = 'none'
      vid1.style.display = 'inline'
      video.play()
      console.log('save Video to db')
      saveToDB()
    })
    cancelVideo.addEventListener('click', (ev) => {
      start.style.display = 'inline'
      stop.style.display = 'inline'
      saveVidToDB.style.display = 'none'
      cancelVideo.style.display = 'none'
      vid2.style.display = 'none'
      vid1.style.display = 'inline'
      video.play()
      console.log('cancel video')
    })
  })
  .catch(function (err) {
    console.log(err.name, err.message)
  })

function saveToDB () {
  console.log('inside save to DB')
  // let console = require('console')
  mongoose.createConnection('mongodb+srv://barry:hobbit00@cluster0-58mmj.mongodb.net/YourLifeYourStories?retryWrites=true&w=majority')
  console.log('just after connect')
  let conn = mongoose.connection
  // let path = require('path')
  console.log('just before stream')
  let Grid = require('gridfs-stream')
  console.log('just before fs')
  let thisVideo = require('fs')
  Grid.mongo = mongoose.mongo
  console.log('just before open')
  conn.once('open', function () {
    console.log('connection open')
    let gfs = Grid(conn.db)

    let writestream = gfs.createWriteStream({
      filename: 'testvideo2.webm'
    })

    thisVideo.createReadStream(blob).pipe(writestream)
    console.log('after blob')
    writestream.on('close', function (file) {
      console.log(file.filename + ' written to DB')
      document.write('written to db')
    })
  })
}

/*********************************
 getUserMedia returns a Promise
 resolve - returns a MediaStream Object
 reject returns one of the following errors
 AbortError - generic unknown cause
 NotAllowedError (SecurityError) - user rejected permissions
 NotFoundError - missing media track
 NotReadableError - user permissions given but hardware/OS error
 OverconstrainedError - constraint video settings preventing
 TypeError - audio: false, video: false
 *********************************/
</script>

<style scoped>

</style>
