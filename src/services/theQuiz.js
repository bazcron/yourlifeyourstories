import Api from '@/services/api'

export default {
  fetchStatements () {
    return Api().get('/statements')
  },
  agreeWithStatement (id) {
    return Api().put(`/statements/${id}/agree`)
  },
  disagreeWithStatement (id) {
    return Api().put(`/statements/${id}/disagree`)
  }
}
