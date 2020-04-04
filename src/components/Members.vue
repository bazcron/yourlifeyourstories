<template>
  <div id="app1" class="hero">
    <div class="signInOrJoin"> <!--...........Sign In or Join........................-->
      <h1 class="vue-title" style="margin-bottom: 10%">Sign In or Join</h1>
      <div class="container" style="display:flex; flex-direction:row; justify-content: space-around;">
      <div style="background-color: cornflowerblue; padding: 2%; display:flex; flex-direction:column; justify-content: right" > <!-- ......................Join Div  -->
        <p>Member Name <input v-model="memberName" placeholder="Member Name"></p>
        <p>Member Password <input v-model="password" placeholder="Password"></p>
        <button id="signIn" v-on:click="signIn=true">Sign In </button>
      </div > <!-- .....................End of Sign in Div -->
        <div style="background-color: cadetblue; padding: 2%; display:flex; flex-direction:column;"> <!-- ......................Sign In Div  -->
          <!--<span class="border border-primary" style="padding: 2%">  -->
          <p>Name <input v-model="memberName" placeholder="Member Name"></p>
          <p>Please Enter your Email <input v-model="email" placeholder="Email"></p>
          <p>Please Enter a Password <input v-model="password" placeholder="Password"></p>
          <button id="join" v-on:click="join=true">Join</button>
        </div> <!-- .....................End of Sign in Div -->
      </div> <!-- .....................End of container div -->
      <div class="memberHasSignedIn" style="display: none">Member Page  <!-- ...................... -->
    <h1 class="vue-title">Members Page</h1>
    <!--div for buttons-->
    <div id="tabButtons" style="width:100%">
      <button id="btnDivProfile" v-on:click="ProfileIsHidden = false, RecordIsHidden = true, WatchIsHidden = true">Members Profile </button>
      <button id="btnDivRecord"   v-on:click="ProfileIsHidden = true, RecordIsHidden = false, WatchIsHidden = true">Record Story</button>
      <button id="btnDivWatch" v-on:click="ProfileIsHidden = true, RecordIsHidden = true, WatchIsHidden = false">Your Stories</button>
    </div>
    <!--.......................................end of div for buttons-->
    <!--put profile here-->
    <div id="divProfile" style="width:100%" v-if="!ProfileIsHidden">
      <h3>Your Profile</h3>
      <p>Member Name {{memberName}}<input v-model="memberName" placeholder="Member Name"></p>
      <p>Member Email {{message}}<input v-model="email" placeholder="Email"></p>
      <p>Member Password <input v-model="password" placeholder="Password"></p>
      <p>Member Date Of Birth <input v-model="dob" placeholder="Date Of Birth"></p>
      <span>Your Bio
      <p style="white-space: pre-line;">{{ bio }}  <!--change this to BIO !!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <textarea v-model="message" placeholder="Enter a little bit about yourself " style="width: 50%; height: 10%"></textarea></p></span>
    </div>
    <!--.......................................end of profile-->
    <!--start of record-->
    <div id="divRecord" width="100%"  v-if="!RecordIsHidden">
      <h2>Record Your Story</h2>
      <video id="vid1" controls style="width: 30%; height:50%"></video>
    <video id="vid2" controls style="width: 30%; height:50%; display:none"></video>
    <p><button id="btnStart">Start Recording</button><button id="btnStop">Stop Recording</button></p>
    <p><button id="btnSave" style="display:none">Save Recording</button><button id="btnCancel"  style="display:none">Cancel Recording</button></p>
    </div>
    <!--.......................................end of record-->
    <!--put watch stories here-->
    <div id="divWatch" width="100%" v-if="!WatchIsHidden">
      <h2>Your Stories</h2>
    </div>
    <!--.......................................end of watch stories-->
    </div>
    </div><!--............... end of member has signed in div-->
  </div> <!--............... end of sign in or join div-->
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
      errors: [],
      ProfileIsHidden: true,
      RecordIsHidden: false,
      WatchIsHidden: true
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
    let recordBtnClicked = document.getElementById('btnDivRecord')
    // let divRecord = document.getElementById('divRecord')

    // let blob = new Blob()
    recordBtnClicked.addEventListener('click', (ev) => {
    }) // ..........................................................................
    start.addEventListener('click', (ev) => {
      vid2.style.display = 'none'
      vid1.style.display = 'inline'
      mediaRecorder.stop()
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
/* .................... Set up Div Buttons to hide and show divs
<Script>
      let btnYourProfile = document.getElementById("btnDivProfile")
      let btnRecordStory = document.getElementById('btnDivRecord')
      let btnYourStories = document.getElementById('btnDivWatch')
      if (btnYourProfile !== undefined) {
         btnYourProfile.addEventListener('click', (ev) => {
        console.log('inside profile btn click')
         divProfile.style.display = 'block'
        divRecord.style.display = 'none'
        divWatch.style.display = 'none'
 })
}
let divProfile = document.getElementById('divProfile')
let divRecord = document.getElementById('divRecord')
let divWatch = document.getElementById('divWatch')
btnRecordStory.addEventListener('click', (ev) => {
})
btnYourStories.addEventListener('click', (ev) => {
}) */
</script>

<style scoped>

</style>
