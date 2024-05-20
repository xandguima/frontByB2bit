import React from 'react';
import Input from '../../components/Input';
import CustomButton from '../../components/button';
import { useAuth } from '../../hooks/auth';

export function Profile() {

  const {signOut, user} = useAuth();
  async function handleSignOut() {
    signOut();
  }
  return (
    <div className='relative h-screen bg-InputColor'>
      <header className='absolute bg-white top-0 w-full h-20 flex flex-col justify-center items-end px-9'>
        <div className='w-44 xs:w-64 '>
          <CustomButton title='Logout' onClick={handleSignOut} />
        </div>
      </header>
      <div className=' flex flex-col items-center justify-center h-full  px-10 '>
        <div className='shadow-custom rounded-2xl	 p-5  flex flex-col items-center gap-7 max-w-96 xs:w-3/4 bg-white'>
          <div className='flex flex-col items-center'>
            <p className='text-black font-bold text-sm'>Profile Picture</p>
            <img className="w-12 rounded-lg mt-2 2xs:w-16" src={user.userFiltered.high} alt="" />
          </div>
          <Input label='Your Name' placeholder={user.userFiltered.name}/>
          <Input label='Your E-mail' placeholder={user.userFiltered.email} />
        </div>

      </div>

    </div>

  )
}

export default Profile;
