import Service from '@ember/service';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbOWy980wz14vWltbOI6bY3SuOcG7CN8s',
  authDomain: 'in-class-lecture.firebaseapp.com',
  projectId: 'in-class-lecture',
  storageBucket: 'in-class-lecture.firebasestorage.app',
  messagingSenderId: '566286730380',
  appId: '1:566286730380:web:05009f376ed2ac3fca67a9',
  measurementId: 'G-4C6BSJ6HXY',
};

// Initialize Firebase

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  //analytics = getFirestore(this.app);
}
