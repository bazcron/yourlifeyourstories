<template>
  <div id="app1" class="hero">
    <h1 class="vue-title" >Video Help</h1>
    <!--    <h3 style="align:left">How To...</h3>-->
    <div >
      <div >
        <div style="width:90%; margin-left: 10%; border-width: 5px; border-color: #3c74a0;">
          <div >
            <b-card title="Introduction Video" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/Introduction.mp4" allowfullscreen type="video/mp4" />
              </video>
              <b-card-text>
                A Quick Introductory Video on the Features of this web site.
              </b-card-text>
            </b-card>
          </div> <!-- end of first vid ................. -->
          <div >
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <!-- Join & Sign In video ............................ -->
            <b-card title="Join & Sign In" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/signInJoin.mp4" allowfullscreen  type="video/mp4" />
              </video>
              <b-card-text>
                A Quick guide on how to Join Your Life, Your Stories and how to then Sign In
              </b-card-text>
            </b-card>
          </div>
          <!-- ............................... -->
          <!-- Record A Video ............................ -->
          <div >
            <b-card title="Members Page: Record A Story" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/record.mp4" allowfullscreen type="video/mp4" />
              </video>
              <b-card-text>
                A Step by Step guide on how to Record and Save a Story
              </b-card-text>
            </b-card>
          </div> <!-- end of first vid ................. -->
          <!-- second video ............................ -->
          <div >
            <b-card title="Members Page: Profile" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/profile.mp4" allowfullscreen type="video/mp4" />
              </video>
              <b-card-text>
                A Quick look at your Profile Page. On this page you have the option to delete your account
              </b-card-text>
            </b-card>
          </div> <!-- end of first vid ................. -->
          <!-- second video ............................ -->
          <div >
            <b-card title="Members Page: Your Stories" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/yourStories.mp4" allowfullscreen type="video/mp4" />
              </video>
              <b-card-text>
                Here you can watch Your Stories on full screen, and where you can also Delete Your Stories
              </b-card-text>
            </b-card>
          </div> <!-- end of first vid ................. -->
          <!-- second video ............................ -->
          <div >
            <b-card title="Search Stories" tag="article" style="border-width: 2px; border-color: #22a09d; float:left; min-width: 35rem; display: inline; max-width:35rem; margin:4px;" class="mb-2">
              <video   style="width:100%" controls>
                <source src="./../assets/membersStories.mp4" allowfullscreen type="video/mp4" />
              </video>
              <b-card-text>
                The Search Page will allow you to find and watch other Members Stories
              </b-card-text>
            </b-card>
          </div> <!-- end of first vid ................. -->
          <!-- second video ............................ -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .vue-title {
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
</style>
