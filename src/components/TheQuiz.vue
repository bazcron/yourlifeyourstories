<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-question" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="statements" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import QuizService from '@/services/quizservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Statements',
  data () {
    return {
      messagetitle: ' The Quiz ',
      statements: [],
      errors: [],
      columns: ['_id', 'Statement', 'Agree', 'Disagree'],
      options: {
        headings: {
          _id: 'ID',
          Statement: 'Statement',
          Agree: 'Agree',
          Disagree: 'Disagree'
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
