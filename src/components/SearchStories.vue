<template>
  <div id="app1" class="hero">
    <h3 class="vue-title">Search Members Stories</h3>
    <div style="margin-left: 10%">
        <div style="width:20%; float:left; margin-right: 2px; margin-top:1px">
        <!-- language drop down list -->
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
      <!-- Country drop down list -->
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
      <!-- Decade drop down list -->
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
          <div style="width:20%; float:left;margin-right: 2px; margin-top:1px">
          <b-button id="keyWordButton" style="width:100%" type="button">Search By Key Word
      </b-button>
            <b-form-textarea
              id="keyWordInput"
              style="width:100%; float:left; margin:1px"
              placeholder="Enter word to search by"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </div>
      </div>
    </div> <!-- ..............................................
    <div id="searchOptions">
      <div>

            <b-dropdown id="dropdown-1" text="Language" class="m-md-2">
              <b-dropdown-item>English</b-dropdown-item>
              <b-dropdown-item>French</b-dropdown-item>
              <b-dropdown-item>German</b-dropdown-item>
            </b-dropdown>

            <b-dropdown id="dropdown-2" text="Country" class="m-md-2">
              <b-dropdown-item>Ireland</b-dropdown-item>
              <b-dropdown-item>England</b-dropdown-item>
              <b-dropdown-item>France</b-dropdown-item>
            </b-dropdown>

            <b-dropdown id="dropdown-3" text="Decade" class="m-md-2">
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
      </div>
      <div>
            <label id="keyWordLabel">
              Search by Key words
            </label>
          <b-form-textarea
          id="keyWordInput"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>
    </div> -->
</template>

<script>

</script>

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
  #keyWordInput2{
    width:20%;
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
</style>
