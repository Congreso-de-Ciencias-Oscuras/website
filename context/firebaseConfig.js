import { initializeApp } from "firebase/app"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APPI_KEY_CONFIG,
  authDomain: "congreso-de-ciencias-oscuras.firebaseapp.com",
  projectId: "congreso-de-ciencias-oscuras",
  storageBucket: "congreso-de-ciencias-oscuras.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
setPersistence(auth, browserLocalPersistence)
export const db = getFirestore(app)
export { auth }