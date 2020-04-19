<template>
  <article>
    <section>
      <!-- img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"  -->
       <!-- <ul>
        <li v-for="(n, index) in resultArray" :key = "index"> -->
      <b-card v-for="(n, index) in resultArray" :key = "index"
              style="border: 3px solid powderblue; display: inline-block; margin: 5px; max-width: 20rem;"
              class="mb-2"
      >
          {{ n.storyCountry }}
          {{ n.storyDecade }}
          {{ n.storyDescription }}
          {{ n.storyTitle }}
          {{ n.storyLanguage }}
          {{ n.storyMinutesUsed }}
          {{ n.storySecondsUsed }}
      </b-card>
       <!--  </li>
      </ul>  -->
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
      resultArray: [],
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
              console.log(response.data)
              this.resultArray.push(...response.data)
              // const resultArray = []
              /* let data = 'data'
              for (data in response) {
                console.log('key ' + data)
                this.resultArray.push(response[data])
                console.log('resultArray ' + this.resultArray)
              } */
              console.log('array ' + this.resultArray[0].storyCountry)
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
