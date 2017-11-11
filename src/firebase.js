import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBlohTkUukytwwhBlMbLb_l00F79E6_0e4',
  authDomain: 'univ-logo.firebaseapp.com',
  databaseURL: 'https://univ-logo.firebaseio.com',
  projectId: 'univ-logo',
  storageBucket: 'univ-logo.appspot.com',
  messagingSenderId: '265439266879',
}

firebase.initializeApp(config)

export const database = firebase.database()
export const storage = firebase.app().storage('gs://univ-logo.appspot.com')
