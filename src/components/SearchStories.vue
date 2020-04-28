<template>
  <div id="app1" class="hero">
    <h1 class="vue-title">Search Members Stories</h1>

    <div style="width:20%; margin-left: 20%; float:left; margin-right: 1%; margin-top:1px">
      <b-form-select v-on:change="getSelectedLanguage" variant="primary" v-model="languageDropdown"
                     :options="options"></b-form-select>
      <div class="mt-3"><strong>{{ languageDropdown }}</strong></div>
    </div>
    <div style="width:20%; float:left; margin-right: 1%; margin-top:1px">
      <!-- Country drop down list -->
      <b-form-select v-on:change="getSelectedCountry" variant="primary" v-model="countryDropdown"
                     :options="options2"></b-form-select>
      <div class="mt-3"><strong>{{ countryDropdown }}</strong></div>
    </div>
    <div style="width:20%; float:left; margin-right: 1%; margin-top:1px">
      <!-- Decade drop down list -->
      <b-form-select v-on:change="getSelectedDecade" variant="primary" v-model="decadeDropdown"
                     :options="options3"></b-form-select>
      <div class="mt-3"><strong>{{ decadeDropdown }}</strong></div>
    </div>
    <b-button id="searchForVideos" variant="warning" style="margin-top:5px;
     margin-bottom: 5px; color:white; width:60%; margin-left: 2%" v-on:click="searchForVideos">Search</b-button>
    {{ NoVideosReturned}}
    <div id="divWatch" style="width:90%; margin-left: 5%" >
      <!-- creates a new card for each video brought back from the database -->
      <!-- Ref: https://bootstrap-vue.js.org/docs/components/card/ -->
      <div>
        <b-card no-body @click="trigger" v-on:click="showThisVideo(index)" v-for="(n, index) in resultArray" :key = "index"
                style="max-width: 540px; border: 3px solid powderblue; display: inline-block; margin: 5px; width: 30%; height:25%"
                class="mb-2; overflow-hidden">
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img src="https://picsum.photos/400/400/?image=25" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-title>{{ n.storyTitle }}</b-card-title>

              <b-card-text>
                {{ n.storyDescription }}
              </b-card-text>

            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
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
</template>

<script>
import searchForVideos from '@/services/videoStories'
import $ from 'jquery'
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Members',
  data () {
    return {
      // used to store all returned video stories based on the search results
      resultArray: [],
      NoVideosReturned: '',
      videoRef: '',
      languageDropdown: 'English',
      options: [
        {value: null, text: 'Language'},
        {value: 'English', text: 'English'},
        {value: 'Gaelic', text: 'Gaelic'},
        {value: 'French', text: 'French'},
        {value: 'German', text: 'German'},
        {value: 'Italian', text: 'Italian'},
        {value: 'Spanish', text: 'Spanish'},
        {value: 'Portuguese', text: 'Portuguese'},
        {value: 'Mandarin', text: 'Mandarin'}
      ],
      countryDropdown: 'Ireland',
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
      decadeDropdown: 'My First...',
      options3: [
        {value: null, text: 'Category'},
        {value: 'My First...', text: 'My First...'},
        {value: 'Something Funny...', text: 'Something Funny...'},
        {value: 'Before the Internet...', text: 'Before the Internet...'},
        {value: 'Before Mobile Phones...', text: 'Before Mobile Phones...'},
        {value: 'When I was a Child', text: 'When I was a Child'},
        {value: 'I Remember When...', text: 'I Remember When...'},
        {value: 'I Survived...', text: 'I Survived...'},
        {value: 'The Day I Met...', text: 'The Day I Met...'},
        {value: 'Something Else', text: 'Something Else'},
        {value: null, text: '__________________', disabled: true},
        {value: null, text: 'It Happened In The...', disabled: true},
        {value: '2020s', text: '2020s'},
        {value: '2010s', text: '2010s'},
        {value: '2000s', text: '2000s'},
        {value: '1990s', text: '1990s'},
        {value: '1980s', text: '1980s'},
        {value: '1970s', text: '1970s'},
        {value: '1960s', text: '1960s'},
        {value: '1950s', text: '1950s'},
        {value: '1940s', text: '1940s'},
        {value: '1930s', text: '1930s'},
        {value: '1920s', text: '1920s'},
        {value: '1910s', text: '1910s'},
        {value: '1900s', text: '1900s'},
        {value: 'It Happened Before 1900', text: 'It Happened Before 1900'}
      ]
    }
  },
  methods: {
    trigger () {
      this.$refs.clickedOn.click()
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
    searchForVideos: function (event) { // do this next
      this.resultArray = []
      let searchOptions = ''
      let storyCountryText = ''
      let storyLanguageText = ''
      let storyDecadeText = ''
      if (this.countryDropdown === null) { storyCountryText = 'Country' } else { storyCountryText = this.countryDropdown.valueOf() }
      if (this.languageDropdown === null) { storyLanguageText = 'Language' } else { storyLanguageText = this.languageDropdown.valueOf() }
      if (this.decadeDropdown === null) { storyDecadeText = 'Category' } else { storyDecadeText = this.decadeDropdown.valueOf() }

      console.log('..' + storyCountryText + '..' + storyLanguageText + '..' + storyDecadeText + '..')
      // in order to cover all combinations of search i created a unique search for each combination
      if (storyCountryText !== 'Country' & storyLanguageText !== 'Language' & storyDecadeText !== 'Category') {
        searchOptions = storyCountryText + ',' + storyLanguageText + ',' + storyDecadeText
        searchForVideos.getVideosBasedOnSearch(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray = []
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyCountryText !== 'Country' && storyLanguageText !== 'Language') {
        console.log('..' + storyCountryText + '..' + storyLanguageText + '..')
        searchOptions = storyCountryText + ',' + storyLanguageText
        searchForVideos.getVideosBasedOnCountryLanguage(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyCountryText !== 'Country' && storyDecadeText !== 'Category') {
        console.log('..' + storyCountryText + '..' + storyDecadeText + '..')
        searchOptions = storyCountryText + ',' + storyDecadeText
        searchForVideos.getVideosBasedOnCountryDecade(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyLanguageText !== 'Language' && storyDecadeText !== 'Category') {
        console.log('..' + storyLanguageText + '..' + storyDecadeText + '..')
        searchOptions = storyLanguageText + ',' + storyDecadeText
        searchForVideos.getVideosBasedOnLanguageDecade(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyCountryText !== 'Country') {
        console.log('..' + storyCountryText + '..')
        searchOptions = storyCountryText
        searchForVideos.getVideosBasedOnCountry(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyLanguageText !== 'Language') {
        console.log('..' + storyLanguageText + '..')
        searchOptions = storyLanguageText
        searchForVideos.getVideosBasedOnLanguage(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      } else if (storyDecadeText !== 'Category') {
        console.log('storyDecadeText ' + storyDecadeText)
        let searchOptions = storyDecadeText
        // searchOptions = storyDecadeText
        searchForVideos.getVideosBasedOnDecade(searchOptions).then(response => { // .then(response => response.json())
          if (response.data === null) {
            console.log(' response data ' + response.data)
          }
          // adds all video details and displays them on the screen.......................
          this.resultArray.push(...response.data)
        }, err => {
          console.log(err.response)
          this.NoVideosReturned = err.response.data.error
        })
      }
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
    }
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
    text-align: left;
    font-size: 20pt;
    font-weight: 100;
    margin-bottom: 10px;
    margin-left: 10px;
    color: cornflowerblue;
  }
  /*  .vue-title{
      margin-top: 10px;
      text-align: left;
      font-size: 20pt;
      font-weight: 100;
      margin-bottom: 10px;
      margin-left: 10px;
      color: cornflowerblue;
    }
    #app1 {
      width: 95%;
      margin: 0;
    }
     .required-field > label::after {
      content: '*';
      color: red;
      margin-left: 0.25rem;
    }
    label {
      display: inline-block;
      width: 30%;
      text-align: center;
      font-size: medium;
      background-color: dimgray;
      color: white;
      height: 30px;
    }
    #keyWordInput{
      position: center;
      background-color: darkgrey;
      color: white;
    }
     p {
      margin-top: 20px;
    }
    input {
      border: 1px solid silver;
      border-radius: 4px;
      background: white;
      padding: 5px 10px;
      width: 540px;
    }*/
</style>

//
// ........... Previous Code ......................................................

<!--<div style="margin-left: 30%">
        <div style="width:20%; float:left; margin-right: 2px; margin-top:1px">
        &lt;!&ndash; language drop down list &ndash;&gt;
        <b-dropdown id="dropdown-1" text="Language" style="width:100%; margin:1px">
          <b-dropdown-item>English</b-dropdown-item>
          <b-dropdown-item>French</b-dropdown-item>
          <b-dropdown-item>German</b-dropdown-item>
        </b-dropdown>
          <label id="languagelabel" style="width:100%">
            Language
          </label>
        </div>
      <div style="width:20%; float:left; margin-right: 2px; margin-top:1px">
      &lt;!&ndash; Country drop down list &ndash;&gt;
        <b-dropdown id="dropdown-2" text="Country" style="width:100%; margin:1px">
          <b-dropdown-item>Ireland</b-dropdown-item>
          <b-dropdown-item>England</b-dropdown-item>
          <b-dropdown-item>France</b-dropdown-item>
        </b-dropdown>
        <label id="countrylabel" style="width:100%">
          Country
        </label>
      </div>
        <div style="width:20%; float:left; margin-right: 2px; margin-top:1px">
      &lt;!&ndash; Decade drop down list &ndash;&gt;
        <b-dropdown id="dropdown-3" text="Decade" style="width:100%; margin:1px">
          <b-dropdown-item>1920s</b-dropdown-item>
          <b-dropdown-item>1930s</b-dropdown-item>
          <b-dropdown-item>1940s</b-dropdown-item>
          <b-dropdown-item>1950s</b-dropdown-item>
          <b-dropdown-item>1960s</b-dropdown-item>
          <b-dropdown-item>1970s</b-dropdown-item>
          <b-dropdown-item>1980s</b-dropdown-item>
          <b-dropdown-item>1990s</b-dropdown-item>
          <b-dropdown-item>2000s</b-dropdown-item>
          <b-dropdown-item>2010s</b-dropdown-item>
          <b-dropdown-item>2020s</b-dropdown-item>
        </b-dropdown>
          <label id="decadelabel" style="width:100%">
            Decade
          </label>
        </div>
      </div>-->
