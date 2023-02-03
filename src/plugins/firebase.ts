
import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvqqtEcB7RwY9E3uoLkfpdlc42tTMC3v4",
    authDomain: "vue-vite-ts-vuetify-abb6b.firebaseapp.com",
    projectId: "vue-vite-ts-vuetify-abb6b",
    storageBucket: "vue-vite-ts-vuetify-abb6b.appspot.com",
    messagingSenderId: "1083855163782",
    appId: "1:1083855163782:web:c9568a25c15d0df3215c07"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()
  const db = firebase.firestore()

  export { storage, db }

  