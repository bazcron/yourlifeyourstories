import Api from '@/services/api'

export default {
  fetchStatements () {
    return Api().get('/statements')
  }
}
