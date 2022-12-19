import React, { useState } from 'react'
import { auth } from '../../firebase-config';
import { Avatar, Button, TextField } from '@mui/material'
import './Auth.css'
import { NavLink } from 'react-router-dom';
const Auth =props => {
  // const SignInWithFirebase=()=>{
  //     const provider = new auth.GoogleAuthProvider();
  // auth.signInWithPopup(provider);
  // }
  const [username, setUsername] = useState('s')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const submitHandler = event => {
    event.preventDefault()
  }
  return (
   <div className='auth'>
      <Avatar  sx={{width:'3em', height:'3em', cursor:'pointer'}} src='' ></Avatar>
    
      <h1>{props.login?"Login to your account" : "New User ? Make One"}</h1>

      <form className='form' onSubmit={submitHandler} variant={'outlined'}>
        {!props.login && <TextField className='input' onChange={event => setUsername(event.target.value)} label='username' type={'text'} required />}
        <TextField className='input' label='email' onChange={event => setEmail(event.target.value)}  type={'email'} required />
        <TextField className='input' label='password'  onChange={event => setPassword(event.target.value)} type={'password'} required />
        <Button type='submit'>{props.login? "login" : "register"}</Button>
      </form>

    {props.login ? <NavLink to={'/signup'}>Make new acount</NavLink> : <NavLink to={'/login'}>login in existing account </NavLink> }
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