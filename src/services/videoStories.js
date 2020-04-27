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
    console.log('inside get for listOfStoryIds ' + listOfStoryIds)
    return Api().get(`/getVideoStories/${listOfStoryIds}`)
  },
  updateMembersVideoStorageTime (timeRemaining) {
    return Api().put('/updateMembersVideoStorageTime', timeRemaining,
      { headers: {'Content-type': 'application/json'} })
  },
  getVideosBasedOnSearch (searchOptions) {
    console.log('inside get Videos based on full search ' + searchOptions)
    return Api().get(`/getVideosBasedOnSearch/${searchOptions}`)
  },
  getVideosBasedOnCountryLanguage (searchOptions) {
    console.log('inside get Videos based on country and language ' + searchOptions)
    return Api().get(`/getVideosBasedOnCountryLanguage/${searchOptions}`)
  },
  getVideosBasedOnCountryDecade (searchOptions) {
    console.log('inside get Videos based on country and decade ' + searchOptions)
    return Api().get(`/getVideosBasedOnCountryDecade/${searchOptions}`)
  },
  getVideosBasedOnLanguageDecade (searchOptions) {
    console.log('inside get Videos based on language and decade ' + searchOptions)
    return Api().get(`/getVideosBasedOnLanguageDecade/${searchOptions}`)
  },
  getVideosBasedOnCountry (searchOptions) {
    console.log('inside get Videos based on country ' + searchOptions)
    return Api().get(`/getVideosBasedOnCountry/${searchOptions}`)
  },
  getVideosBasedOnLanguage (searchOptions) {
    console.log('inside get Videos based on language ' + searchOptions)
    return Api().get(`/getVideosBasedOnLanguage/${searchOptions}`)
  },
  getVideosBasedOnDecade (searchOptions) {
    console.log('inside get Videos based on decade ' + searchOptions)
    return Api().get(`/getVideosBasedOnDecade/${searchOptions}`)
  }
}
