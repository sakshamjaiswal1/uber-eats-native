// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKwklB8hvRWl1pr2f-YirvbF94brtNmyI',
  authDomain: 'twitter-clone-35c93.firebaseapp.com',
  databaseURL: 'https://twitter-clone-35c93-default-rtdb.firebaseio.com',
  projectId: 'twitter-clone-35c93',
  storageBucket: 'twitter-clone-35c93.appspot.com',
  messagingSenderId: '90619868425',
  appId: '1:90619868425:web:4228b9431ae809a0138fd8',
  measurementId: 'G-9SBT57BSY4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
