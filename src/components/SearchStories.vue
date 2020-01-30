<template>
  <div id="app1" class="hero">
    <h3 class="vue-title">Search Members Stories</h3>
    <div id="searchOptions">
      <table>
        <thead>
        </thead>
        <tbody>
        <tr >
          <td >
            <!-- language drop down list -->
            <b-dropdown id="dropdown-1" text="Language" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </td>
          <td >
            <!-- Country drop down list -->
            <b-dropdown id="dropdown-2" text="Country" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </td>
          <td >
            <!-- Decade drop down list -->
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
          </td>
          <td >
            <label id="keyWordLabel">
              Search by Key words
            </label>
          </td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td>
          <b-form-textarea
          id="keyWordInput"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> -->

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
