import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyC3osLOD_CMosOlj-3MuCwoUN7yInCLYJI",
  authDomain: "chatbot-e1f36.firebaseapp.com",
  projectId: "chatbot-e1f36",
  storageBucket: "chatbot-e1f36.appspot.com",
  messagingSenderId: "854617066334",
  appId: "1:854617066334:web:f78d884538bd580c4b5dcf"
})

export const auth = app.auth()
export default app
