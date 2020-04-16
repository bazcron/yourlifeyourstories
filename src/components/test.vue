<template>
  <article>
    <section v-for= "(n, index) in pageOffSet" :key = "index">
      <p>{{index}}</p>
      <p>
        kfdfjdsklfjdskfjdskl dfk;dslfjkds;klfjkds;klf
        kdjfkds kdjfkdfj dfjdkfjdsk
      </p>
    </section>
    <footer>
<div ref="infinatescrolltrigger" id="scroll-trigger"></div>
      <div class="circle-loader" v-if="showLoader"></div>
    </footer>
  </article>
</template>

<script>
import videoStories from '@/services/videoStories'
import axios from 'axios'
// const mongoose = require('mongoose')
export default {
  data: () => {
    return {
      currentPage: 1,
      maxPerPage: 2,
      totalResults: 100,
      showLoader: false
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.totalResults / this.maxPerPage)
    },
    pageOffSet () {
      return this.maxPerPage * this.currentPage
    }
  },
  methods: {
    scrollTrigger () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showLoader = true
            setTimeout(() => {
              this.currentPage += 1
              this.showCancelButton = false
            }, 2000)
          }
        })
      })
      observer.observe(this.$refs.infinatescrolltrigger)
    },

    getListOfStories () {
      let listOfStoryIds = []
      // eslint-disable-next-line standard/object-curly-even-spacing
      axios.get('http://localhost:3000/returnTokenData/', { headers: { token: localStorage.getItem('token')}})
        .then(res => {
          listOfStoryIds = res.data.members.storyId
          // listOfStoryIds = res.data.members.storyId
          console.log('listOfStoryIds before searching db' + listOfStoryIds)
          videoStories.getListOfStoryIds(listOfStoryIds) // .then(response => response.json())
            .then(response => {
              console.log(response)
              const resultArray = []
              let data = 'data'
              for (data in response) {
                console.log('key ' + data)
                resultArray.push(response[data])
                console.log('resultArray ' + resultArray)
              }
              console.log('array ' + resultArray)
            }
            // let responsed = response.json()
            //  return responsed
            // return response.json()
              // }
            )/* .then(data => {
              const resultArray = []
              for (let key in data.response) {
                resultArray.push(data.response[key])
                console.log('resultArray ' + resultArray)
              }
              console.log('list of video stories ' + res)
            }, err => {
              console.log('error' + err.response)
            }) */
        }, err => {
          console.log(err.response)
        })
    }
  },
  mounted () {
    this.scrollTrigger()
    this.getListOfStories()
  }
}
</script>
