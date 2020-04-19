import firebase from '@firebase/app'
import 'firebase/storage'

// const dotenv = require('dotenv')

const firebaseConfig = {
  apiKey: 'AIzaSyCjqWXIfziQBTLjjs4x_J19dYFvyTKNL-c',
  authDomain: 'your-life-your-story.firebaseapp.com',
  databaseURL: 'https://your-life-your-story.firebaseio.com',
  projectId: 'your-life-your-story',
  storageBucket: 'your-life-your-story.appspot.com',
  messagingSenderId: '594471321348',
  appId: '1:594471321348:web:62b6b262ebeec15bbc5a51',
  measurementId: 'G-W3PE6S3CT6'
}

const fb = firebase.initializeApp(firebaseConfig)

export {fb}
