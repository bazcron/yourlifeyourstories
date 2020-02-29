<template>
  <div id="app1" class="hero">
    <h3 class="vue-title">Members Page</h3>
    <video id="vid1" controls style="width: 30%; height:50%"></video>
    <video id="vid2" controls style="width: 30%; height:50%; display:none"></video>
    <p><button id="btnStart">Start Recording</button><button id="btnStop">Stop Recording</button></p>

  </div>
</template>

<script>
import member from '@/services/members'
export default {
  name: 'MembersPage',
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
      member.fetchMembers()
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
  audio: false,
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
    let start = document.getElementById('btnStart')
    let stop = document.getElementById('btnStop')
    let vidSave = document.getElementById('vid2')
    let mediaRecorder = new MediaRecorder(mediaStreamObj)
    let chunks = []

    start.addEventListener('click', (ev) => {
      mediaRecorder.start()
      console.log(mediaRecorder.state)
    })
    stop.addEventListener('click', (ev) => {
      mediaRecorder.stop()
      let vid2 = document.getElementById('vid2')
      let vid1 = document.getElementById('vid1')
      vid2.style.display = 'inline'
      vid1.style.display = 'none'
      console.log(mediaRecorder.state)
    })
    mediaRecorder.ondataavailable = function (ev) {
      chunks.push(ev.data)
    }
    mediaRecorder.onstop = (ev) => {
      let blob = new Blob(chunks, { 'type': 'video/webm;' })
      chunks = []
      let videoURL = window.URL.createObjectURL(blob)
      vidSave.src = videoURL
    }
  })
  .catch(function (err) {
    console.log(err.name, err.message)
  })

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
