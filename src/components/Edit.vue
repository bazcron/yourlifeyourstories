<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-plus" style="padding: 3px"></i>{{statementtitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form>
            <div class="form-group" :class="{ 'form-group--error': $v.statement.$error }">
              <label class="form__label">Add a Statement to the Survey</label>
              <input class="form__input" type="text" v-model.trim="statement"/>
            </div>
            <p>Do you Agree or Disagree with your Statement, put a number in the box below.</p>
            <div class="form-group" :class="{ 'form-group--error': $v.agree.$error }">
              <label class="form-control-label" name="agree">agree (Enter a number)</label>
              <input class="form__input" type="number" v-model.trim="agrees"/>
            </div>
            <div class="error" v-if="!$v.agree.minValue">agree value must be zero or more</div>
            <div class="form-group" :class="{ 'form-group--error': $v.statement.$error }">
              <label class="form-control-label" name="disagree">disagree (Enter a number)</label>
              <input class="form__input" type="number" v-model.trim="disagrees"/>
            </div>
            <div class="error" v-if="!$v.disagree.minValue">disagree value must be zero or more</div>
            <div class="error" v-if="!$v.statement.required">Statement is Required</div>
            <div class="error" v-if="!$v.statement.minLength">Statement must have at least {{$v.statement.$params.minLength.min}} letters.</div>
            <p>
              <button v-on:click="updateStatement">Update State</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">You have created a new Statement</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Saving Statement...</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template> -->

<script>
import Vue from 'vue'
import VueForm from 'vueform'
// import Vuelidate from 'vuelidate'
// import VueSweetalert from 'vue-sweetalert'
import QuizService from '@/services/theQuiz'
import { required, minLength, minValue } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
export default {
  data () {
    return {
      statementtitle: 'Edit Statement',
      statements: this.statement,
      temp: {},
      agrees: this.agree,
      disagrees: this.disagree,
      statement: this.statement,
      submitStatus: ''
    }
  },
  validations: {
    statement: {
      required,
      minLength: minLength(10)
    },
    agree: {
      required,
      minValue: minValue(0)
    },
    disagree: {
      required,
      minValue: minValue(0)
    }
  },
  created () {
    this.getStatement()
  },
  methods: {
    getStatement: function () {
      QuizService.fetchStatement(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.statement = this.temp[0].statement
          this.agrees = this.temp[0].agree
          this.disagrees = this.temp[0].disagree
          // console.log('Getting Statement: ' + JSON.stringify(this.statement, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateStatement: function (statements) {
      console.log('Before PUT ' + JSON.stringify(statements, null, 5))
      QuizService.putStatement(this.$router.params, statements)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(statements, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
