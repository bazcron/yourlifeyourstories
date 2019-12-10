<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-question" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="statements" :options="options">
        <a slot="Agree" slot-scope="props" class="fa fa-thumbs-up fa-2x" style="color:green"  @click="agree(props.row._id)"></a>
        <a slot="Disagree" slot-scope="props" class="fa fa-thumbs-down fa-2x" style="color:red" @click="disagree(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import QuizService from '@/services/theQuiz'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: false})

export default {
  name: 'Statements',
  data () {
    return {
      messagetitle: ' The Quiz ',
      statements: [],
      props: ['_id'],
      errors: [],
      columns: ['statement', 'agree', 'disagree', 'Agree', 'Disagree'],
      options: {
        headings: {
          statement: 'Statement',
          agree: 'Agreed',
          disagree: 'Disagreed'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadStatements()
  },
  methods: {
    loadStatements: function () {
      QuizService.fetchStatements()
        .then(response => {
          // JSON responses are automatically parsed.
          this.statements = response.data
          console.log(this.statements)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    agree: function (id) {
      QuizService.agreeWithStatement(id)
        .then(response => {
          this.loadStatements()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    disagree: function (id) {
      QuizService.disagreeWithStatement(id)
        .then(response => {
          this.loadStatements()
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
    width: 60%;
    margin: 0 auto;
  }
</style>
