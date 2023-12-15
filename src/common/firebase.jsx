import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMdEZyXmk3D7eLD9fTlYOJfIvwXOgUnAQ",
    authDomain: "blogging-website-69cfc.firebaseapp.com",
    projectId: "blogging-website-69cfc",
    storageBucket: "blogging-website-69cfc.appspot.com",
    messagingSenderId: "798010524300",
    appId: "1:798010524300:web:1c4218d37703865cf9b1a9"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider).then((result) => {
        user = result.user;
    }).catch((err) => {
        console.log(err);
    })

    return user;
}

