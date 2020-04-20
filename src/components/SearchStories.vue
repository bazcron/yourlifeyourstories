<template>
  <div id="app1" class="hero">
    <h1 class="vue-title">Search Members Stories</h1>
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
  </div>
</template>

<script>
import searchForVideos from '@/services/videoStories'
export default {
  name: 'Members',
  data () {
    return {
      // used to store all the members video details
      searchResultArray: [],
      //
      videoRef: 'https://firebasestorage.googleapis.com/v0/b/your-life-your-story.appspot.com/o/Videos%2F%5Bobject%20Blob%5DAddaTitle941545?alt=media&token=247eb862-ed71-479a-b421-fb9974f08fa1',
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
        {value: 'My First...', text: 'My First...'},
        {value: 'Before the Internet...', text: 'Before the Internet...'},
        {value: 'Before Mobile Phones...', text: 'Before Mobile Phones...'},
        {value: 'When I was a Child', text: 'When I was a Child'},
        {value: 'I Remember When...', text: 'I Remember When...'},
        {value: 'I Survived...', text: 'I Survived...'},
        {value: 'The Day I Met...', text: 'The Day I Met...'},
        {value: null, text: '__________________'},
        {value: null, text: 'It Happened In'},
        {value: 'before', text: 'Before 1900'},
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
      decade: '1990s',
      country: 'Ireland',
      language: 'English'
    }
  },
  methods: {
    searchForVideos: function (event) { // do this next
      let storyCountryText = this.country
      let storyLanguageText = this.language
      let storyDecadeText = this.decade
      let searchOptions = storyCountryText + ',' + storyLanguageText + ',' + storyDecadeText
      searchForVideos.getVideosBasedOnSearch(searchOptions).then(response => { // .then(response => response.json())
        console.log(' response data ' + response.data)
        console.log(response)
        // adds all video details and displays them on the screen.......................
        this.searchResultArray.push(...response.data)
      }, err => {
        console.log(err.response)
        this.newVideoMessage = err.response.data.error
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
    }
  }
}
</script>

<style scoped>
  .vue-title{
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
  }
</style>
