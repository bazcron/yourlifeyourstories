<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-plus" style="padding: 3px"></i>{{statementtitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.statement.$error }">
              <label class="form__label">Add a Statement to the Survey</label>
              <input class="form__input" v-model.trim="$v.statement.$model"/>
            </div>
            <p>If You Agree with or Disagree with your Statement, put a number in the boxes below.</p>
              <div class="form-group" :class="{ 'form-group--error': $v.agree.$error }">
              <label class="form-control-label" name="agree">agree (Enter a number)</label>
              <input class="form__input" type="number" v-model.trim="agree"/>
            </div>
            <div class="error" v-if="!$v.agree.minValue">agree value must be zero or more</div>
            <div class="form-group" :class="{ 'form-group--error': $v.statement.$error }">
              <label class="form-control-label" name="disagree">disagree (Enter a number)</label>
              <input class="form__input" type="number" v-model.trim="disagree"/>
            </div>
            <div class="error" v-if="!$v.disagree.minValue">disagree value must be zero or more</div>
            <div class="error" v-if="!$v.statement.required">Statement is Required</div>
            <div class="error" v-if="!$v.statement.minLength">Statement must have at least {{$v.statement.$params.minLength.min}} letters.</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Save Statement</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">You have created a new Statement</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Saving Statement...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import QuizService from '@/services/theQuiz'
import { required, minLength, minValue } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Donate',
  data () {
    return {
      statementtitle: ' Statement ',
      // message: '',
      statement: '',
      agree: 0,
      disagree: 0,
      newStatement: {},
      submitStatus: null
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
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          let statement = {
            statement: this.statement,
            agree: this.agree,
            disagree: this.disagree
            // message: this.message
          }
          this.newStatement = statement
          console.log('Submitting in AddStatementForm : ' + JSON.stringify(this.newStatement, null, 5))
          this.addStatement(this.newStatement)
        }, 500)
      }
    },
    addStatement: function (statementToSave) {
      console.log('addStatement!')
      console.log('adding Statement : ' + statementToSave)
      QuizService.postStatement(statementToSave)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
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
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: large;
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
