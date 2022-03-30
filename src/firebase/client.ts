import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAd-gLcVgtQO9Lh8zBs_jqw4ER6eqX6ZjQ',
  authDomain: 'favtweet-dc5c9.firebaseapp.com',
  projectId: 'favtweet-dc5c9',
  storageBucket: 'favtweet-dc5c9.appspot.com',
  messagingSenderId: '40378320703',
  appId: '1:40378320703:web:4fce0b065799f0ce1cf58a',
}
const app = !getApps().length && initializeApp(firebaseConfig)

export { app }
