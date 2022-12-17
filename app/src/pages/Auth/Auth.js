import React from 'react'
import styled from "styled-components";
import { auth } from '../../firebase-config';
import { Avatar, Button, TextField } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import './Auth.css'
const Auth = () => {
  // const SignInWithFirebase=()=>{
  //     const provider = new auth.GoogleAuthProvider();
  // auth.signInWithPopup(provider);
  // }

  const submitHandler = event => {
    event.preventDefault()
  }
  return (
    <div className='auth'>
      <Avatar sx={{ width: '100px', height: '100px' }} src='https://scontent.fjrs14-1.fna.fbcdn.net/v/t1.6435-1/133123107_1719908884848960_8285773248408044066_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QFAPpr1t640AX_vxINJ&_nc_ht=scontent.fjrs14-1.fna&oh=00_AfCHOlc3hbiwZ_dap4DzysW3PJJI3tVO6ekd62mftHefpg&oe=63C5042F' ><AccountCircle /></Avatar>
      <h1>New User ? Make One</h1>

      <form className='form' onSubmit={submitHandler} variant={'outlined'}>
        <TextField className='input' label='username' type={'text'} required />
        <TextField className='input' label='password' type={'password'} required />
        <TextField className='input' label='email' type={'email'} required />
        <Button type='submit'>Save</Button>
      </form>
      {/* <button onClick={SignInWithFirebase}> Sign in with google</button> */}
    </div>
  );
}

export default Auth
//my auth branch.

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;