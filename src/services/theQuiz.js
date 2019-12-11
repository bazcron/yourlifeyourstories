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
  },
  postStatement (statement) {
    return Api().post('/statements', statement,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteStatement (id) {
    return Api().delete(`/statements/${id}`)
  }
}
