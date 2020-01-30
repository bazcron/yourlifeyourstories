<template>
  <div id="app1" class="hero">
    <h3 class="vue-title">Video Help</h3>
    <h1>How To...</h1>
    <div width="90%" background-color="blue">
      <iframe class="embed-responsive-item" width="30%" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
      <iframe class="embed-responsive-item" width="30%" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
      <iframe class="embed-responsive-item" width="30%" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
    </div>
    <div width="90%">
      <p><b-button class="b-button" width="30%">Click to Play</b-button>
      <b-button class="b-button" width="30%">Click to Play</b-button>
        <b-button class="b-button" width="30%">Click to Play</b-button></p>
      <p class="helpDescription" width="30%">How to Join<b-button class="b-button">Click to Play</b-button>
      How to Join<b-button class="b-button">Click to Play</b-button></p>
    </div>
  </div>
</template> -->

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
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
  .donate-form .form-control-label.text-left{
    text-align: left;
  }
  .helpTable{
    width:80%;
    margin: 0 auto;
  }
  .b-button{
    margin-left: 5px;
  }
  .helpDescription{
    margin-top: 0px;
    alignment: top;
  }
  .video{
    margin-right: 10px;
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
    background-color: red;
  }
  #keyWordLabel{
    position: center;
    width:80%;
  }
  #searchOptions{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    width: 100%;
  }
  .typo__p {
    width: 540px;
    font-size: large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }
  .m-md-2 {
    width:10%;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
