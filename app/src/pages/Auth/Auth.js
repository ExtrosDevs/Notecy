import React from 'react'
import {auth} from '../../firebase-config';

function Auth() {
    const SignInWithFirebase=()=>{
        const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
  return (
    <div>
        <h2>Auth page</h2>
        <button onClick={SignInWithFirebase}> Sign in with google</button>
    </div>
  )
}

export default Auth