<template>
  <div id="app" style="color:black">
    <b-navbar toggleable="md"  variant="primary" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px; font-size: x-large" > Home</i></b-nav-item>
          <b-nav-item to="/members"><i class="fa fa-user" style="padding: 5px; font-size: x-large"> Members Page</i></b-nav-item>
        <b-nav-item to="/searchStories"><i class="fa fa-question" style="padding: 5px; font-size: x-large"> Search Stories</i></b-nav-item>
          <b-nav-item to="/help"><i class="fa fa-info" style="padding: 5px; font-size: x-large"> Help</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <i style="width: 40%; font-size: large"> Enter Story ID</i>
          <b-form-input style="width: 60%" placeholder="Enter Story ID"></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
