<template>
  <div id="app" style="color:black">
    <b-navbar toggleable="md"  variant="primary" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/#"><i class="fa fa-home" style="color:white; padding: 5px; font-size: x-large" > Home</i></b-nav-item>
          <b-nav-item to="/members"><i class="fa fa-user" style="color:white; padding: 5px; font-size: x-large"> Members Page</i></b-nav-item>
        <b-nav-item to="/searchStories"><i class="fa fa-question" style="color:white; padding: 5px; font-size: x-large"> Search Stories</i></b-nav-item>
          <b-nav-item to="/help"><i class="fa fa-info" style="color:white; padding: 5px; font-size: x-large"> Help</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <!-- <i style="width: 40%; font-size: large"> Enter Story ID</i>  -->
          <b-form-input style="width: 30%; margin-right: 5px;" placeholder="Enter Story ID"></b-form-input>
          <b-button variant="warning" style="color:white">Search for Story</b-button>
          <b-nav-item to="/members"><i style="padding: 5px; font-size: large"> Sign In/Join</i></b-nav-item>
        </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// let $ = require('jquery')
export default {
  name: 'App'
  // jquery: 'jquery'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: orange;
}

</style>
