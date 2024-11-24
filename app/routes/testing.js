import Route from '@ember/routing/route';
import { service } from '@ember/service';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  authStateReady,
} from 'firebase/auth';

export default class TestingRoute extends Route {
  @service firebase;

  async model() {
    const auth = getAuth(this.firebase.app);
    await auth.authStateReady();
    return auth.currentUser;
  }
}
