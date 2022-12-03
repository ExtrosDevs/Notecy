import React from 'react'
import {auth} from '../../firebase-config';

function Auth() {
    const SignInWithFirebase=()=>{
        var google_provider=new auth.auth.GoogleAuthProvider();
        auth.auth().signInWithPopup(google_provider).then((re)=>{
            console.log(re);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h2>Auth page</h2>
        <button onClick={SignInWithFirebase}> Sign in with google</button>
    </div>
  )
}

export default Auth