<template>
  <div class="hero">
    <p><button id="btnJoin" onclick="join()">Join</button><button id="btnSignIn" onclick="signIn()">Sign In</button></p>
    <p id="popUp"></p>
    <h2 class="vue-title">Your Life Your Stories</h2>
    <table align="center">
      <tr>
        <td bgcolor="#6495ed">
          <p class="lead"><b><i>Your Life Your Stories</i></b>
          <p>A place for you to tell your Stories. </p>
          <p>Stories that are important to you.</p>
          <p><b></b></p>
          <p>Are they Funny, or Serious... its up to you.</p>
        </td>
        <td bgcolor="#f5f5f5" width="50%" height="100%">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
          </div>
        </td>
        <td bgcolor="#6495ed">
          <p class="lead"><b><i>Your Life Your Stories</i></b>
          <p>A place for you to tell your Stories. </p>
          <p>Stories that are important to you.</p>
          <p><b></b></p>
          <p>Are they Funny, or Serious... its up to you.</p>
        </td>
      </tr>
    </table>
    <p></p>
  </div>
</template>
<style>
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
    margin-top: 10px;
    text-align: center;
    font-size: 30pt;
    font-weight: 100;
    margin-bottom: 10px;
    margin-left: 10px;
    color: cornflowerblue;
  }
</style>
