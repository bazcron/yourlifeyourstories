<template>
  <div id="app1" class="hero">
    <p id="popUp"></p>
    <h2 class="vue-title">Your Life Your Stories</h2>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <table align="center" style="margin-top: 2%; width:96%">
      <tr>
        <td bgcolor="#6495ed" width="25%" height="100%">
          <p class="lead"><b><i style="color:white;">Welcome to </i></b>
          <p class="lead"><b><i style="color:white;">Your Life, Your Stories</i></b>
          <p>Here You can, in Your Own Words,</p>
          <p>Record the Moments that have happened in Your Life</p>
          <p>Memories that are Important to You</p>
        </td>
        <td width="50%" height="100%">
          <div class="embed-responsive embed-responsive-16by9">
            <video   style="width:100%; height: 100%; object-fit: cover;" controls>
<!--              <source src="./../assets/IntroVideo.mp4"  allowfullscreen/>-->
              <source src="./../IntroVideo.webm"  allowfullscreen/>
            </video> >
          </div>
        </td>
        <td bgcolor="#6495ed" width="25%" height="100%">
          <p class="lead"><b><i style="color:white;">Record</i></b></p>
          <p>Directly from your Camera</p>
          <p class="lead"><b><i style="color:white;">Save</i></b></p>
          <p>With One Click</p>
          <p class="lead"><b><i style="color:white;">Share</i></b></p>
          <p>With Family & Friends</p>
          <p></p>
          <p><b></b></p>
          <p></p>
        </td>
      </tr>
    </table>
    <p></p>
  </div>
</template>

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
    text-align: center;
    font-size: 30pt;
    font-weight: 100;
    margin-bottom: 10px;
    margin-left: 10px;
    color: cornflowerblue;
  }
</style>
