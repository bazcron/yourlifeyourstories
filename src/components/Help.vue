<template>
  <div id="app1" class="hero">
    <h1 class="vue-title" >Video Help</h1>
    <h3 style="align:left">How To...</h3>
    <div style="width:90%; background-color:blue">
      <div style="width:30%">
        <video  style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/test.mp4" type="video/mp4" />
        </video>
        <video  style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/assets/test.webm" type="video/webm">
          your browser isnt supporting this video format
        </video>
        <video  style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/assets/test.webm" type="video/webm">
          your browser isnt supporting this video format
        </video>
      </div>

      <div style="width:30%">
        <video id="video4" style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/assets/test.webm" type="video/webm">
          your browser isnt supporting this video format
        </video>
        <video  style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/assets/test.webm" type="video/webm">
          your browser isnt supporting this video format
        </video>
        <video  style="background-color:blue; width:30%; height:20%" controls>
          <source src="../../src/assets/test.webm" type="video/webm">
          your browser isnt supporting this video format
        </video>
      </div>
    </div>
    <!--<div width="90%">
      <p><b-button class="b-button" width="30%">Click to Play</b-button>
      <b-button class="b-button" width="30%">Click to Play</b-button>
        <b-button class="b-button" width="30%">Click to Play</b-button></p>
    </div>-->
  </div>
</template> -->

<style scoped>
  .vue-title {
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
