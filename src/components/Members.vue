<template>
  <div id="app1" class="hero">
    <div class="signInOrJoin" v-show="showDiv"> <!--...........Sign In or Join........................-->
      <h1 class="vue-title" style="margin-bottom: 10%">Sign In or Join</h1>
      <div class="container" style="display:flex; flex-direction:row; justify-content: space-around;">
      <div style="background-color: cornflowerblue; padding: 2%; display:flex; flex-direction:column; justify-content: right" > <!-- ......................Join Div  -->
        <p>Member Name <input v-model.trim="findMemberName" placeholder="Member Name"></p>
        <p>Member Password <input type="password" v-model="findPassword" placeholder="Password"></p>
        <button id="signIn" v-on:click="signIn">Sign In </button>
        {{error}}   <!-- ......................displayed an error if incorrect Sign in details entered   -->
      </div > <!-- .....................End of Sign in Div -->
        <div style="background-color: cadetblue; padding: 2%; display:flex; flex-direction:column;"> <!-- ......................Sign In Div  -->
          <!--<span class="border border-primary" style="padding: 2%">  -->
          <p>Name <input v-model="memberName" placeholder="Member Name"></p>
          <p>Please Enter your Email <input v-model="email" placeholder="Email"></p>
          <p>Please Enter a Password <input type="password" v-model="password" placeholder="Password"></p>
          <button id="join" v-on:click="join">Join</button>
          {{ errorJoining}}   <!-- ......................displayad an error if unable to join   -->
        </div> <!-- .....................End of Sign in Div -->
      </div>
    </div><!--............... end of sign in or join div-->
      <div class="memberHasSignedIn" v-show="showMemberDiv">
    <h1 class="vue-title" style="">Members Page</h1>
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
      <p>Member Name {{memberName}}</p>
      <p>Member Email {{email}}</p>
      <p>Member Password </p>
      <p>Member Date Of Birth {{dob}}</p>   <!--<input v-model="dob" placeholder="Date Of Birth"> -->
      <span>Your Bio
      <p style="white-space: pre-line;">{{ bio }}  <!--change this to BIO !!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <textarea v-model="message" placeholder="Enter a little bit about yourself " style="width: 50%; height: 10%"></textarea></p></span>
    </div>
    <!--.......................................end of profile-->
    <!--start of record-->
    <div id="divRecord" style="width:100%"  v-if="!RecordIsHidden">   <!-- v-if="!RecordIsHidden"  change it back to this -->
      <h2>Record Your Story</h2>
      <video id="vid1" controls style="width: 30%; height:50%"></video>
    <video id="vid2" controls style="width: 30%; height:50%; display:none"></video>
    <p><button id="btnStart" v-on:click="start">Start Recording</button><button id="btnStop" v-on:click="stop">Stop Recording</button></p>
    <p><button id="btnSave" style="display:none">Save Recording</button><button id="btnCancel"  style="display:none">Cancel Recording</button></p>
        <div id="clockdiv">
          <div>
            <h3>Time</h3>
            <h3>Left</h3>
          </div>
          <div>
            <div class="smalltext" id="minutes">{{minutes}}</div>
            <div class="smalltext" >Minutes</div>
          </div>
          <div>
            <div class="smalltext" id="seconds">{{seconds}}</div>
            <div class="smalltext" >Seconds</div>
          </div>
        </div>
        <!-- ............................................................ -->
        <div id="clockdiv2">
          <div>
            <h3>Time</h3>
            <h3>Used</h3>
          </div>
          <div>
            <div class="smalltext" id="minutesUsed">{{minutesUsed}}</div>
            <div class="smalltext" >Minutes</div>
          </div>
          <div>
            <div class="smalltext" id="secondsUsed">{{secondsUsed}}</div>
            <div class="smalltext" >Seconds</div>
          </div>y
        </div>
        </div>
    <!--.......................................end of record-->
    <!--put watch stories here-->
    <div id="divWatch" style="width:100%" v-if="!WatchIsHidden">
      <h2>Your Stories</h2>
    </div>
    <!--.......................................end of watch stories-->
    </div><!--............... end of member has signed in div-->
  </div>
</template>

<script>
import members from '@/services/members'
const mongoose = require('mongoose')
let blob = new Blob()
// ----------------- variables for the clock ...................
let stopped = false
let deadline = 1200000
// import saveThisVideo from '@testvideo.webm'
export default {
  name: 'Members',
  data () {
    return {
      members: [],
      errors: [],
      error: '',
      showDiv: true,
      showMemberDiv: false,
      errorJoining: '',
      ProfileIsHidden: true,
      RecordIsHidden: false,
      WatchIsHidden: true,
      memberName: this.memberName,
      email: this.email,
      password: this.password,
      findMemberName: this.findMemberName,
      findPassword: this.findPassword,
      clockdiv: this.clockdiv,
      minutes: this.minutes,
      seconds: this.seconds,
      minutesUsed: this.minutesUsed,
      secondsUsed: this.secondsUsed,
      clockdiv2: this.clockdiv2
    }
  },
  methods: {
    start () {
      // let deadline = 1200000
      // initializeClock('clockdiv', deadline)
      stopped = false
      initializeClock('clockdiv', deadline)
    },
    stop () {
      console.log('stop')
      stopped = true
      // initializeClock('clockdiv', -99)
    },
    join: function (event) {
      console.log('inside join')
      let newMember = {
        memberName: this.memberName,
        email: this.email,
        password: this.password
      }
      console.log(newMember)
      members.addNewMember(newMember).then(res => {
        console.log(res)
      }, err => {
        console.log(err.response)
        this.errorJoining = err.response.data.error
      })
    },
    signIn: function (event) {
      // let showDiv = this.showDiv
      let memberLogin = {
        memberName: this.findMemberName,
        password: this.findPassword
      }
      console.log('inside SignIn' + memberLogin.memberName + memberLogin.password)

      members.checkMember(this.findMemberName, memberLogin).then(res => {
        console.log('inside members.getMember')
        console.log(res)
        this.error = 'Congratualtions You Have Signed In'
        // this.RecordIsHidden = false
        // showMemberDiv =
        this.showDiv = false
        this.showMemberDiv = true
        // this.showDiv = true
      }, err => {
        console.log('error in signIn ')
        // console.log(err.response)
        this.error = err.response.data.error
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
      stopped = false
      initializeClock('clockdiv', deadline)
    })
    stop.addEventListener('click', (ev) => {
      mediaRecorder.stop()
      vid2.style.display = 'inline'
      vid1.style.display = 'none'
      console.log(mediaRecorder.state)
      console.log('stop')
      stopped = true
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
function getTimeRemaining (endtime) {
  let t = endtime
  let seconds = Math.floor((t / 1000) % 60)
  let minutes = Math.floor((t / 1000 / 60) % 60)

  // let minutesSpan2 = document.getElementById('minutesUsed')
  let secondsUsedConnect = document.getElementById('secondsUsed')
  let minutesUsedConnect = document.getElementById('minutesUsed')

  let secondsUsed = ((deadline - endtime) / 1000 % 60)
  let minutesUsed = ((Math.floor((deadline / 1000 / 60) % 60)) - (Math.floor((endtime / 1000 / 60) % 60))) - 1
  if (minutesUsed === -1) {
    minutesUsed = 0
  }
  if (secondsUsed === 60) {
    secondsUsed = 0
  }
  secondsUsedConnect.innerHTML = ('0' + secondsUsed).slice(-2)
  minutesUsedConnect.innerHTML = ('0' + minutesUsed).slice(-2)
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeClock (id, endtime) {
  console.log('here')
  // let clock = document.getElementById('clockdiv')
  let minutesSpan = document.getElementById('minutes')
  let secondsSpan = document.getElementById('seconds')

  function updateClock () {
    endtime = endtime - 1000
    let t = getTimeRemaining(endtime)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (stopped === true) {
      clearInterval(timeinterval)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
    }
    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }
  updateClock()
  let timeinterval = setInterval(updateClock, 1000)
}
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
</script>

<style scoped>
  body{
    text-align: center;
    background: #00ECB9;
    font-family: sans-serif;
    font-weight: 100;
  }

  h1{
    color: #396;
    font-weight: 100;
    font-size: 40px;
    margin: 10px 0px 20px;
  }
  .vue-title{
    text-align: left;
    color:dodgerblue;
  }

  #clockdiv{
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
  }
  #clockdiv2{
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
  }

  #clockdiv > div{
    padding: 10px;
    border-radius: 3px;
    background: cadetblue;
    display: inline-block;
  }
  #clockdiv2 > div{
    padding: 10px;
    border-radius: 3px;
    background: skyblue;
    display: inline-block;
  }

  #clockdiv div > span{
    padding: 15px;
    border-radius: 3px;
    background: skyblue;
    display: inline-block;
  }
  #clockdiv2 div > span{
    padding: 15px;
    border-radius: 3px;
    background: cadetblue;
    display: inline-block;
  }

  .smalltext{
    padding-top: 5px;
    font-size: 16px;
  }
</style>
