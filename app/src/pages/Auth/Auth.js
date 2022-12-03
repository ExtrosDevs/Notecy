import React from 'react'
import styled from "styled-components";
import {auth} from '../../firebase-config';

function Auth() {
    const SignInWithFirebase=()=>{
        const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
  return (
    <div>
      <Title>Auth page</Title>
      <button onClick={SignInWithFirebase}> Sign in with google</button>
    </div>
  );
}

export default Auth
//my auth branch.

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;