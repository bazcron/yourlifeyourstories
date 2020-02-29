<template>
  <div id="app" style="color:black">
    <b-navbar toggleable="md"  variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/membersPage"><i class="fa fa-plus" style="padding: 5px"> Members Page</i></b-nav-item>
        <b-nav-item to="/searchStories"><i class="fa fa-question" style="padding: 5px"> Search Stories</i></b-nav-item>
          <b-nav-item to="/help"><i class="fa fa-question" style="padding: 5px"> Help</i></b-nav-item>
          <b-nav-item><i class="fa fa-question" style="padding: 5px"> Enter Story ID<b-form-input></b-form-input></i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">

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
