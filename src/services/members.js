import Api from '@/services/api'

export default {
  fetchMembers () {
    return Api().get('/members')
  },
  deleteMember (memberId) {
    return Api().delete(`/members/${memberId}`)
  },
  addNewMember (member) {
    return Api().post('/members', member,
      { headers: {'Content-type': 'application/json'} })
  },
  checkMember (memberName, checkMember) {
    return Api().post(`/members/${memberName}`, checkMember)
  },
  addNewVideoStory (videoStory) {
    return Api().post('/addNewVideoStory', videoStory,
      { headers: {'Content-type': 'application/json'} })
  },
  updateMemberWithStoryId (videoId) {
    return Api().put('/updateMemberWithStoryId', videoId,
      { headers: {'Content-type': 'application/json'} })
  }
}
