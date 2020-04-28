<template>
  <div id="app1" class="hero">
    <div >
      <!--...........hiding this div while working on member div     v-show="showDiv"........................-->
      <div class="signInOrJoin" v-show="showDiv" >  <!--v-show=false -->
        <h1 class="vue-title">Sign In or Join</h1>
        <div class="container" style="display:flex; flex-direction:row; justify-content: space-around;">
          <div
            style="background-color: #69b5ed; padding: 2%; display:flex; flex-direction:column; justify-content: right">
            <!-- ......................Join Div  -->
            <p style="float:right; margin-top: 30%">Member Name <input  style="float:right;" v-model.trim="findMemberName" placeholder="Member Name"></p>
            <p>Member Password <input type="password" v-model="findPassword" placeholder="Password"></p>
            <b-button variant="primary" style="margin-top:5px;" id="signIn" v-on:click="signIn">Sign In</b-button>
            {{error}}   <!-- ......................displayed an error if incorrect Sign in details entered   -->
          </div> <!-- .....................End of Sign in Div -->
          <div style="background-color: #69b5ed; padding: 2%; display:flex; flex-direction:column; justify-content: right">
            <!-- ......................Sign In Div  -->
            <!--<span class="border border-primary" style="padding: 2%">  -->
            <p>Name <input style="float:right" v-model="memberName" placeholder="Member Name"></p>
            <p>Please Enter your Email <input style="float:right" v-model="email" placeholder="Email"></p>
            <p>Please Enter a Password <input type="password" v-model="password" placeholder="Password"></p>
            <p>Please Tell Us A Little Bit About Yourself</p>
            <span><textarea v-model="bio" hint="Enter a little bit about yourself "
                            style="float:right; width: 100%; height: 95%"></textarea></span>
            <b-button variant="primary" style="margin-top:5px;" id="join" v-on:click="join">Join</b-button>
            {{ errorJoining}}   <!-- ......................displayad an error if unable to join   -->
          </div> <!-- .....................End of Sign in Div -->
        </div>
      </div><!--............... end of sign in or join div-->
      <!--...........SHOWING this div while working on member div     v-show="showMemberDiv"........................-->
      <div class="memberHasSignedIn" v-show="showMemberDiv">
        <h1 class="vue-title" style="margin-bottom: 25px;">Members Page<b-button variant="danger" style="width:10%; float:right; margin-right: 1%; margin-top:1px" @click="logout">Log Out</b-button></h1>

        <!--div for buttons-->
        <div id="tabButtons" style="width:100%; margin-bottom: 15px; margin-top: 10px">
          <b-button id="btnDivProfile" style="width:30%" variant="primary"
                    v-on:click="ProfileIsHidden = false, RecordIsHidden = true, WatchIsHidden = true">Your Profile
          </b-button>
          <b-button id="btnDivRecord" style="width:30% ; margin:1%" variant="primary"
                    v-on:click="ProfileIsHidden = true, RecordIsHidden = false, WatchIsHidden = true">Record Story
          </b-button>
          <b-button id="btnDivWatch" style="width:30%" variant="primary"
                    v-on:click="ProfileIsHidden = true, RecordIsHidden = true, WatchIsHidden = false">Your Stories
          </b-button>
        </div>
        <!--.......................................end of div for buttons-->
        <!--Start of Profile section ......................................-->
        <div id="divProfile" style="width:100%" v-if="!ProfileIsHidden">
          <p>Member Name {{this.memberName}}</p>
          <p>Member Email {{this.email}}</p>
          <p style="margin-left: auto; margin-right: auto; width: 8em; width:30%;">Your Bio : {{this.bio}}</p>
      <!--<p style="white-space: pre-line;">{{ this.bio }}  &lt;!&ndash;change this to BIO !!!!!!!!!!!!!!!!!!!!!!!!!! &ndash;&gt;
      <textarea v-model="message" placeholder="Enter a little bit about yourself "
                style="width: 50%; height: 10%"></textarea></p>-->
          <b-button style="margin-top: 10%; width:30%;" variant = 'danger' id="btnDeleteAccount" v-on:click="btnDeleteAccount">Delete Account</b-button>
        </div>
        <!--end of profile Div.........-->
        <!-- -->
        <!--start of record Div.........................................................-->
        <div class="divRecord" style="width:100%;" v-if="!RecordIsHidden">
          <!-- v-if="!RecordIsHidden"  change it back to this -->
          <div id="clockTimerDiv " style="width:30%; margin-left: 4%; margin-top: 30px">
            <div id="clockdiv" style="background-color: skyblue; padding:5px; margin: 2px;">
              <p style="font-size: 16px; padding-top: -5px">Time Left</p>
              <div style="padding-top: 5px">
                <span class="minutes" id="minutes">{{minutes}}</span>
                <div class="smalltext" >Minutes</div>
              </div>
              <div style="padding-top: 5px">
                <span class="seconds" id="seconds">{{seconds}}</span>
                <div class="smalltext" >Seconds</div>
                <!--<div class="smalltext" id="seconds">{{seconds}}</div>
                <div class="smalltext">Seconds</div>-->
              </div>
            </div>
            <!-- ............................................................ -->
            <div id="clockdiv2" style="background-color: #62ecfb; padding:5px; margin: 2px;">
              <p style="font-size: 16px; padding-top: -5px">Time Used</p>
              <div style="padding-top: 5px">
                <span class="minutes" id="minutesUsed">{{minutesUsed}}</span>
                <div class="smalltext" >Minutes</div>
                <!--<div class="smalltext" id="minutesUsed">{{minutesUsed}}</div>
                <div class="smalltext">Minutes</div>-->
              </div>
              <div style="padding-top: 5px">
                <span class="secondsUsed" id="secondsUsed">{{secondsUsed}}</span>
                <div class="smalltext" >Seconds</div>
                <!-- <div class="smalltext" id="secondsUsed">{{secondsUsed}}</div>
                 <div class="smalltext">Seconds</div>-->
              </div>
            </div>
          </div> <!-- end of Timer Div... -->
          <div id="divRecordStory" style="width:30%; margin-left: 1%">
            <video id="vid1" controls style="width: 100%; height:100%"></video>
            <video id="vid2" controls style="width: 100%; height:100%; display:none"></video>
            <p>
              <b-button variant="primary" style="margin-top: 30px;" id="btnStart" v-on:click="start">Start Recording</b-button>
              <b-button variant="danger" style="margin-top: 30px;" id="btnStop" v-on:click="stop">Stop Recording</b-button>
            </p>
            <p>
              <button id="btnSave" style="display:none">Save Recording</button>
              <button id="btnCancel" style="display:none">Cancel Recording</button>
            </p>
          </div> <!-- End of DivRecordStory........ -->

          <div id="saveStoryDiv" style="width:30%; margin-left: 1%"> <!-- save story here ................................ -->
            <p>Please Enter Information on your Video Story</p>
            <p>Story Title <input v-model="storyTitle" placeholder="Enter Story Title"></p> <!--v-model="storyTitle" -->
            <div style="margin-left: 10%">
              <!-- language drop down list -->
              <!-- Ref:https://stackoverflow.com/questions/46789710/how-to-get-selected-item-of-b-form-select-with-vue-js-v-onchange-does-nothing -->
              <div style="width:32%; float:left; margin-right: 1%; margin-top:1px">
                <b-form-select v-on:change="getSelectedLanguage" variant="primary" v-model="languageDropdown"
                               :options="options"></b-form-select>
                <div class="mt-3" style="width:3%"><strong>{{ languageDropdown }}</strong></div>
              </div>
              <div style="width:32%; float:left; margin-right: 1%; margin-top:1px">
                <!-- Country drop down list -->
                <b-form-select v-on:change="getSelectedCountry" variant="primary" v-model="countryDropdown"
                               :options="options2"></b-form-select>
                <div class="mt-3"><strong>{{ countryDropdown }}</strong></div>
              </div>
              <div style="width:32%; float:left; margin-right: 1%; margin-top:1px">
                <!-- Decade drop down list -->
                <b-form-select v-on:change="getSelectedDecade" variant="primary" v-model="decadeDropdown"
                               :options="options3"></b-form-select>
                <div class="mt-3"><strong>{{ decadeDropdown }}</strong></div>
              </div>
            </div>
            <span>Tell Us About this Story
      <p style="white-space: pre-line;">
      <textarea v-model="storyDescription" placeholder="Tell Us About This Story"
                style="width: 100%; height: 20%; width:95%; margin-left: 0%"></textarea></p></span><!-- v-model="aboutStory"-->
            <b-button id="btnSaveThisStory" variant="warning" style="color:white; width:96%; margin-left: 2%" v-on:click="btnSaveThisStory">SAVE This Story</b-button>
            <b-button id="btnDoNotSaveStory" variant="danger" style="margin-top:5px; margin-bottom: 5px; color:white; width:96%; margin-left: 2%" v-on:click="btnDoNotSaveStory">Cancel</b-button>
            {{newVideoMessage}}
          </div> <!-- End ofsave story here div-->
        </div>
        <!-- end of record Div...........-->
        <!-- -->
        <!--watch stories Div.........................................-->
        <div id="divWatch" style="width:100%" v-if="!WatchIsHidden">
          <!-- creates a new card for each video brought back from the database -->
          <b-card no-body   v-for="(n, index) in resultArray" :key = "index"
                  style="max-width: 540px; border: 3px solid powderblue; display: inline-block; margin: 5px; width: 30%; height:25%"
                  class="mb-2; overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img src="https://picsum.photos/400/400/?image=25" @click="trigger" v-on:click="showThisVideo(index)" alt="Image" class="rounded-0"></b-card-img>
<!--                <b-card-img src="./../yourlife.png" class="rounded-0"></b-card-img>-->
              </b-col>
              <b-col md="7">
                <b-card-title>{{ n.storyTitle }}</b-card-title>

                <b-card-text>
                  {{ n.storyDescription }}
                </b-card-text>

              </b-col>
            </b-row>
            <b-button v-on:click="deleteThisVideo(index)" >Delete Video</b-button>
          </b-card>

        </div>
        <!-- end of watch stories Div.....-->
      </div>
      <!-- end of member has signed in div... -->
      <!-- Video PopUp display ...................................... -->
      <div class="bs-example">
        <!-- Button HTML (to Trigger Modal) -->
        <a href="#myModal" ref="clickedOn"  data-toggle="modal"></a>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!-- Modal HTML -->
        <div id="myModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button"  class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Video Story</h4>
              </div>
              <div class="modal-body">
                <iframe id="video" width="460" height="315" v-bind:src="videoRef" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Video PopUp display ...................................... -->
    </div>
  </div>
</template>

<script>
import members from '@/services/members'
import videoStories from '@/services/videoStories'
import $ from 'jquery'
import axios from 'axios'
import {fb} from '../firebase'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import swal from 'sweetalert'
// import App from 'App.vue';
let listOfStoryIds = ''

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueSweetalert)
// const mongoose = require('mongoose')
// const mongoose = require('mongoose')
let blob = new Blob()
let finalSecondsUsed = 0
let finalMinutesUsed = 0
let video = ''
// ----------------- variables for the clock ...................
let stopped = false
let totalTime = 1200000
// import saveThisVideo from '@testvideo.webm'
export default {
  name: 'Members',
  mounted () {
    // if member is authorised, if there is a token created, set which divs are displayed
    if (localStorage.getItem('token') != null) {
      this.showDiv = false
      this.showMemberDiv = true
      allowAccessToVideoCamera()
    }
    this.findMemberName = ''
    this.findPassword = ''
    // ............ Returning data about the signed in member............................
    // eslint-disable-next-line standard/object-curly-even-spacing
    axios.get('http://localhost:3000/returnTokenData/', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        console.log('in mounted member name' + res.data.members.MemberName)
        console.log('in mounted member id' + res.data.members.MemberId)
        console.log('in mounted story ids' + res.data.members.storyId)
        this.memberName = res.data.members.MemberName
        /* this.MemberName = res.data.members.memberName
        this._id = res.data.members.MemberId
        this.storyId = res.data.members.storyId */
        listOfStoryIds = ''
        listOfStoryIds = res.data.members.storyId
        console.log(listOfStoryIds)
        this.getListOfStories(listOfStoryIds)
      })
  },
  data () {
    return {
      // used to store all the members video details
      resultArray: [],
      //
      videoRef: '',
      languageDropdown: ' ',
      options: [
        {value: ' ', text: 'Language'},
        {value: 'English', text: 'English'},
        {value: 'Gaelic', text: 'Gaelic'},
        {value: 'French', text: 'French'},
        {value: 'German', text: 'German'},
        {value: 'Italian', text: 'Italian'},
        {value: 'Spanish', text: 'Spanish'},
        {value: 'Portuguese', text: 'Portuguese'},
        {value: 'Mandarin', text: 'Mandarin'}
      ],
      countryDropdown: null,
      options2: [
        {value: null, text: 'Country'},
        {value: 'England', text: 'England'},
        {value: 'Ireland', text: 'Ireland'},
        {value: 'France', text: 'France'},
        {value: 'Germany', text: 'Germany'},
        {value: 'Italy', text: 'Italy'},
        {value: 'Spain', text: 'Spain'},
        {value: 'Portugal', text: 'Portugal'},
        {value: 'China', text: 'China'}
      ],
      decadeDropdown: null,
      options3: [
        {value: null, text: 'Category'},
        {value: 'A Love Story', text: 'A Love Story'},
        {value: 'Something Funny', text: 'Something Funny'},
        {value: 'My Corona Virus Story', text: 'My Corona Virus Story'},
        {value: 'My First...', text: 'My First...'},
        {value: 'When I was a Child', text: 'When I was a Child'},
        {value: 'I Remember When...', text: 'I Remember When...'},
        {value: 'Before the Internet...', text: 'Before the Internet...'},
        {value: 'Before Mobile Phones...', text: 'Before Mobile Phones...'},
        {value: 'A War Story', text: 'A War Story'},
        {value: 'I Survived...', text: 'I Survived...'},
        {value: 'Something Else', text: 'Something Else'},
        {value: null, text: '__________________', disabled: true},
        {value: 'It Happened Before 1900', text: 'It Happened Before 1900'},
        {value: null, text: 'It Happened In The...', disabled: true},
        {value: '1900s', text: '1900s'},
        {value: '1910s', text: '1910s'},
        {value: '1920s', text: '1920s'},
        {value: '1930s', text: '1930s'},
        {value: '1940s', text: '1940s'},
        {value: '1950s', text: '1950s'},
        {value: '1960s', text: '1960s'},
        {value: '1970s', text: '1970s'},
        {value: '1980s', text: '1980s'},
        {value: '1990s', text: '1990s'},
        {value: '2000s', text: '2000s'},
        {value: '2010s', text: '2010s'},
        {value: '2020s', text: '2020s'}
      ],
      message: '',
      dob: '',
      bio: '',
      storyTitle: 'Add a Title',
      decade: '1990s',
      country: 'Ireland',
      language: 'English',
      storyDescription: 'Add a Description',
      minutesUsed: 0,
      secondsUsed: 0,
      members: [],
      errors: [],
      error: '',
      newVideoMessage: '',
      // sportsData: ['english', 'Irish'],
      showDiv: true,
      showMemberDiv: false,
      errorJoining: '',
      ProfileIsHidden: true,
      RecordIsHidden: false,
      WatchIsHidden: true,
      memberName: this.memberName,
      email: this.email,
      password: this.password,
      findMemberName: '',
      findPassword: '',
      clockdiv: this.clockdiv,
      minutes: 0,
      seconds: 0,
      clockdiv2: this.clockdiv2
    }
  },
  methods: {
    //
    // Ref : https://jsfiddle.net/f706L1tk/   a way to activate a click event on one element by clicking another
    // in this case when a user clicks on one of my videos, that then open the pop up modal to play the video
    trigger () {
      this.$refs.clickedOn.click()
    },
    btnDoNotSaveStory () {
      // show a warning message first....
      video.play()
      console.log('cancel video & cancel video save')
    },
    // Show video of member................................................
    //
    showThisVideo (e) {
      console.log(' index of video being played = ' + e)
      this.videoRef = this.resultArray[e].storyFirebaseRef.toString()
      console.log('video to text ' + this.videoRef)
      // this.$refs.clickedOn.click()

      $(document).ready(function () {
        /* Get iframe src attribute value i.e. YouTube video url
            and store it in a variable */
        let url = $('#video').attr('src')

        // $('#btnTrigger').click();
        /* Assign empty url value to the iframe src attribute when
            modal hide, which stop the video playing */
        $('#myModal').trigger().on('hide.bs.modal', function () {
          $(this).find('video')[0].pause()
          $('#video').attr('src', '')
        })

        /* Assign the initially stored url back to the iframe src
            attribute when modal is displayed again */
        $('#myModal').on('show.bs.modal', function () {
          $('#video').attr('src', url)
        })
      })
    },
    // Displays all the members videos details.................................................
    //
    getListOfStories (listOfStoryIds) {
      console.log('listOfStoryIds before searching db' + listOfStoryIds)
      videoStories.getListOfStoryIds(listOfStoryIds) // .then(response => response.json())
        .then(response => {
          console.log(' response data ' + response.data)
          console.log(response)
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        })
    },
    getSelectedLanguage: function (language) { // gets a the language value from dropdown list
      console.log(language)
      this.language = language
    },
    getSelectedCountry: function (country) { // gets a the country value from dropdown list
      console.log(country)
      this.country = country
    },
    getSelectedDecade: function (decade) { // gets a the decade value from dropdown list
      console.log(decade)
      this.decade = decade
    },
    //
    // Video Recording Section ....................................................................................
    //
    start () {
      stopped = false
      initializeClock('clockdiv', totalTime)
    },
    stop () {
      console.log('stop')
      stopped = true
    },
    deleteThisVideo: function (index) {
      console.log('the index of the video to delete' + index)
      console.log('the id of the video story to delete ' + this.resultArray[index]._id)
      let videoStoryId = this.resultArray[index]._id
      videoStories.deleteVideoStory(videoStoryId)
        .then(response => {
          console.log('video story deleted')
          this.resultArray.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    btnDeleteAccount: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      axios.get('http://localhost:3000/returnTokenData/', { headers: { token: localStorage.getItem('token')}})
        .then(res => {
          console.log('in mounted member name ' + res.data.members.MemberId)
          let memberId = res.data.members.MemberId
          members.deleteMember(memberId)
            .then(response => {
              console.log('member deleted ' + this.message)
              localStorage.clear()
              this.showDiv = true
              this.showMemberDiv = false
            })
            .catch(error => {
              console.log(error)
            })
        })
    },
    btnSaveThisStory: function (event) { // do this next
      let downloadTheUrl = ''
      let storyTitleText = this.storyTitle
      let storyCountryText = this.country
      let storyLanguageText = this.language
      let storyDecadeText = this.decade
      let storyDescriptionText = this.storyDescription
      let memberNameText = this.memberName

      // create a unique id for each video......................................
      let videoId = this.storyTitle
      console.log(videoId)
      videoId = videoId.replace(/\s+/g, '') // remove all spaces so the server can handle it better
      console.log(videoId + '...')
      videoId = videoId + Math.floor(Math.random() * 999999)
      console.log(videoId)
      //
      // saving blob to firebase using the unique video id as part of the file name of the video........................................................
      console.log('Video ' + blob)
      let videoStorageRef = fb.storage().ref('Videos/' + blob + videoId)
      let uploadTask = videoStorageRef.put(blob)

      uploadTask.on('state_changed', function (snapshot) {

      }, (error) => {
        console.log(error)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          downloadTheUrl = downloadURL.valueOf()
          console.log('File available at', downloadURL)
          console.log('File available at this', downloadTheUrl)
          saveNewVideo() // WAIT : call the rest of the save fuction once the video has been saved to firebase
        })
      })
      // ................................................................................
      function saveNewVideo () {
        console.log('downloadUrl' + downloadTheUrl)
        // convert minutes and seconds into milliseconds to store in db
        finalMinutesUsed = (finalMinutesUsed * 60) * 1000
        finalSecondsUsed = finalSecondsUsed * 1000
        let timeUsed = finalMinutesUsed + finalSecondsUsed
        totalTime = totalTime - timeUsed
        console.log(finalSecondsUsed)
        console.log(finalMinutesUsed)
        console.log(timeUsed)

        let newVideo = {
          storyId: videoId,
          storyFirebaseRef: downloadTheUrl,
          storyTitle: storyTitleText,
          storyCountry: storyCountryText,
          storyLanguage: storyLanguageText,
          storyDecade: storyDecadeText,
          storyDescription: storyDescriptionText,
          storyMinutesUsed: finalMinutesUsed,
          storySecondsUsed: finalSecondsUsed
        }
        let updateMemberWithVideoId = {
          storyId: videoId,
          memberName: memberNameText
        }
        console.log(newVideo)
        // Save Video Story to database....................................
        //
        members.addNewVideoStory(newVideo).then(res => {
          console.log(res)
          // this.newVideoMessage = res.response.data.error
        }, err => {
          console.log(err.response)
          this.newVideoMessage = err.response.data.error
        })
        members.updateMemberWithStoryId(updateMemberWithVideoId).then(res => {
          console.log(res)
        }, err => {
          console.log(err.response)
        })
      }
    },
    //
    // Create an Account...........................................................................................
    //
    join: function (event) {
      console.log('inside join')
      let newMember = {
        memberName: this.memberName,
        email: this.email,
        password: this.password,
        bio: this.bio
      }
      console.log(newMember)
      members.addNewMember(newMember).then(res => {
        console.log(res)
        this.errorJoining = res.response.data.error
      }, err => {
        console.log(err.response)
        this.errorJoining = err.response.data.error
      })
    },
    // Sign Into Account...............................................................................................
    //
    signIn: function (event) {
      // let showDiv = this.showDiv
      let memberLogin = {
        memberName: this.findMemberName,
        password: this.findPassword
      }
      console.log('inside SignIn' + memberLogin.memberName + memberLogin.password)

      // Sends name and password to server and checks both........................
      // if name and password are Incorrect it drops down to the err method and handles the error
      // else it displays the main part of Member page and sets a token to localstorage
      members.checkMember(this.findMemberName, memberLogin).then(res => {
        console.log('inside members.getMember')
        console.log(res)
        // Successfully Signed In ................................................
        localStorage.setItem('token', res.data.token)
        // hides first Div and shows Member Div...................................
        this.showDiv = false
        this.showMemberDiv = true
        // ............ Returning data about the signed in member............................
        // eslint-disable-next-line standard/object-curly-even-spacing
        axios.get('http://localhost:3000/returnTokenData/', { headers: { token: localStorage.getItem('token')}})
          .then(res => {
            console.log('in mounted member name' + res.data.members.MemberName)
            console.log('in mounted member id' + res.data.members.MemberId)
            console.log('in mounted story VideoStorageTime: ' + res.data.members.VideoStorageTime)
            this.memberName = res.data.members.MemberName
            /* this.MemberName = res.data.members.memberName
              this._id = res.data.members.MemberId
              this.storyId = res.data.members.storyId */
            totalTime = parseInt(res.data.members.VideoStorageTime)
            listOfStoryIds = ''
            listOfStoryIds = res.data.members.storyId
            console.log(totalTime)
            this.getListOfStories(listOfStoryIds)
          })
      }, err => {
        console.log('error in signIn ')
        // console.log(err.response)
        this.error = err.response.data.error
      })
    },
    logout: function () {
      localStorage.clear()
      this.showDiv = true
      this.showMemberDiv = false
    }
  }
}

// Video Capture from devices camera..................................................................................
// Ref : https://www.youtube.com/watch?v=K6L38xk2rkk
//
let constraintObj = {
  audio: true,
  video: {
    facingMode: 'user',
    width: {min: 640, ideal: 1280, max: 1920},
    height: {min: 480, ideal: 720, max: 1080}
  }
}

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
function allowAccessToVideoCamera () {
  console.log('inside allowAccessToVideoCamera')
  navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function (mediaStreamObj) {
      // connect the media stream to the first video element
      video = document.querySelector('video')
      if ('srcObject' in video) {
        video.srcObject = mediaStreamObj
      } else {
        // old version
        video.src = window.URL.createObjectURL(mediaStreamObj)
      }

      video.onloadedmetadata = function () {
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

      recordBtnClicked.addEventListener('click', (ev) => {
      }) // ..........................................................................
      start.addEventListener('click', (ev) => {
        console.log('Video Recorder Started')
        vid2.style.display = 'none'
        vid1.style.display = 'inline'
        mediaRecorder.stop()
        mediaRecorder.start()
        console.log('started: ' + mediaRecorder.state)
        stopped = false
        initializeClock('clockdiv', totalTime)
      })
      stop.addEventListener('click', (ev) => {
        console.log('Video Recorder Stopped')
        mediaRecorder.stop()
        console.log(mediaRecorder.state)
        vid2.style.display = 'inline'
        vid1.style.display = 'none'
        stopped = true
      })
      mediaRecorder.ondataavailable = function (ev) {
        chunks.push(ev.data)
      }
      mediaRecorder.onstop = (ev) => {
        console.log('inside media.stop')
        blob = new Blob(chunks, {'type': 'video/webm;'})
        // ..........................................................................................
        chunks = []
        let videoURL = window.URL.createObjectURL(blob)
        vidSave.src = videoURL
      }
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
      swal({title: 'Please Allow Access To Your Video',
        text: ' Oops! \n\n' +
          'In order to Record Directly from your Screen, we need Access to your Video Camera. \n\n ' +
         ' Please Refresh this page and Click on Allow when prompted to.',
        icon: 'warning'})
    })
}
//
// Create Countdown Timer and keep track of time used...............................................
//
function initializeClock (id, endtime) {
  console.log('Initializing the Clock Element')
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
function getTimeRemaining (endtime) {
  let t = endtime
  let seconds = Math.floor((t / 1000) % 60)
  let minutes = Math.floor((t / 1000 / 60) % 60)

  let secondsUsedConnect = document.getElementById('secondsUsed')
  let minutesUsedConnect = document.getElementById('minutesUsed')

  let secondsUsed = ((totalTime - endtime) / 1000 % 60)
  let minutesUsed = ((Math.floor((totalTime / 1000 / 60) % 60)) - (Math.floor((endtime / 1000 / 60) % 60))) - 1
  if (minutesUsed === -1) {
    minutesUsed = 0
  }
  if (secondsUsed === 60) {
    secondsUsed = 0
  }
  secondsUsedConnect.innerHTML = ('0' + secondsUsed).slice(-2)
  minutesUsedConnect.innerHTML = ('0' + minutesUsed).slice(-2)
  finalSecondsUsed = ('0' + secondsUsed).slice(-2)
  finalMinutesUsed = ('0' + minutesUsed).slice(-2)
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  }
}

</script>

<style scoped>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  .vue-title {
    text-align: Left;
    font-size: 20pt;
    font-weight: 100;
    margin-bottom: 10px;
    margin-left: 10px;
    color: cornflowerblue;
  }
  .divRecord {
    display: flex;
    flex-direction: row;
  }

  #clockTimerDiv {
    display: flex;
    flex-direction: column;
  }

  #divRecordStory {
    display: flex;
    flex-direction: column;
  }

  #saveStoryDiv {
    display: flex;
    flex-direction: column;
  }

  /*body {
    text-align: center;
    background: #00ECB9;
    font-family: sans-serif;
    font-weight: 100;
  }*/
  /*
    .vue-title {
      margin-top: 5px;
      text-align: left;
      font-size: 20pt;
      font-weight: 100;
      margin-bottom: 10px;
      margin-left: 10px;
      color: cornflowerblue;
    }*/

  h3 {
    font-size: 15pt;
    font-weight: 100;
    margin-bottom: 5px;
    text-align: center;
    color: cornflowerblue;
  }

  #tabButtons {
    margin-bottom: 5px;
  }

  #clockdiv {
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 20px;
  }
  #clockdiv > div {
    padding: 10px;
    border-radius: 3px;
    background: #3c74a0;
    display: inline-block;
  }
  #clockdiv div > span {
    padding: 10px;
    border-radius: 3px;
    background: skyblue;
    display: inline-block;
  }

  #clockdiv2 {
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 20px;
  }
  #clockdiv2 > div {
    padding: 10px;
    border-radius: 3px;
    background: #22a09d;
    display: inline-block;
  }
  #clockdiv2 div > span {
    padding: 10px;
    border-radius: 3px;
    background: #62ecfb;
    display: inline-block;
  }

  .smalltext {
    padding-top: 5px;
    font-size: 16px;
  }
</style>

//.................................... Code Commented out ................................................
//
// Save Video to Database ...............................................................................
//
/* function saveToDB () {
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
//................................... mediaRecorder.onstop = (ev) => { ...............
/* saveVidToDB.addEventListener('click', (ev) => {
start.style.display = 'inline'
stop.style.display = 'inline'
saveVidToDB.style.display = 'none'
cancelVideo.style.display = 'none'
vid2.style.display = 'none'
vid1.style.display = 'inline'
video.play()
console.log('save Video to db')
saveToDB()
}) */

//..........................media.recorder.
/* // saving blob to firebase
console.log('Video ' + blob)
let videoStorageRef = fb.storage().ref('Videos/' + blob)
let uploadTask = videoStorageRef.put(blob)

uploadTask.on('state_changed', function (snapshot) {

}, (error) => {
console.log(error)
}, () => {
uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
console.log('File available at', downloadURL)
})
}) */

// saveThisVideo = blob

// saveVidToDB.style.display = 'inline'
// cancelVideo.style.display = 'inline'
// start.style.display = 'none'
// stop.style.display = 'none'

// ..................... getListOfStories (listOfStoryIds) {
// const resultArray = []
/* let data = 'data'
for (data in response) {
console.log('key ' + data)
this.resultArray.push(response[data])
console.log('resultArray ' + this.resultArray)
} */
// }
// let responsed = response.json()
//  return responsed
// return response.json()
// }
//  )
/* .then(data => {
const resultArray = []
for (let key in data.response) {
resultArray.push(data.response[key])
console.log('resultArray ' + resultArray)
}
console.log('list of video stories ' + res)
}, err => {
console.log('error' + err.response)
}) */
//  }, err => {
//    console.log(err.response)
