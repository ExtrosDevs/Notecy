import React from 'react'
import styled from "styled-components";
import Button from "@mui/material/Button";
import {auth} from '../../firebase-config';

function Auth() {
    const SignInWithFirebase=()=>{
        const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
  return (
    <Body>
      <Title>Auth page</Title>
      <h3>Sign in with google to start Notecy!</h3>
      <Button onClick={SignInWithFirebase}> Sign in with google</Button>
    </Body>
  );
}

export default Auth
//my auth branch.

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Body = styled.section`
  text-align: center;
  font-size: 1em;

`;