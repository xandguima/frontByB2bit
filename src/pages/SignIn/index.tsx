import React from 'react'
import logo from '../../assets/B2Bit_Logo.png';
import Input from '../../components/Input';
import CustomButton from '../../components/button';
import {useAuth} from '../../hooks/auth';

import { useState } from 'react';


export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useAuth();
  function handleSignIn() {
    signIn({email, password});
  }
  

  return (
    <div className='p-5 flex flex-col items-center justify-center h-screen px-10 bg-white'>
      <div className='shadow-custom rounded-2xl	 p-5  flex flex-col items-center gap-7 max-w-96 xs:w-3/4'>
        <img src={logo} alt="B2Bit" className="w-44 mb-2 mt-4 xs:w-52 2xs:w-56 sm:w-64" />
        
        <Input type='email' label='E-mail' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' label='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>

        <CustomButton title='Sign In' onClick={handleSignIn}/>
      </div>

    </div>

  )
}

export default SignIn;
