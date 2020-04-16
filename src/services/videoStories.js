import Api from '@/services/api'

export default {
  fetchMembers () {
    return Api().get('/videoStories')
  },
  addNewVideoStory (videoStory) {
    return Api().post('/addNewVideoStory', videoStory,
      { headers: {'Content-type': 'application/json'} })
  },
  getListOfStoryIds (listOfStoryIds) {
    return Api().get('/getVideoStories', listOfStoryIds)
  }
}
