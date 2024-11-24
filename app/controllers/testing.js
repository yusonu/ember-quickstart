/* eslint-disable prettier/prettier */
import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, authStateReady } from 'firebase/auth';
import { tracked } from '@glimmer/tracking';

export default class TestingController extends Controller {
  @service firebase;
  @service auth;

  @action test() {
    const auth = getAuth(this.firebase.app)
    console.log(auth.currentUser)
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    onAuthStateChanged(auth, (user) => {
        console.log("user", user)
    })
  }
}
