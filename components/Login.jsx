import React from 'react'
import { Fugaz_One } from 'next/font/google';
import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Login() {
  return (
    <div className='flex flex-col gap-4 p-10'>

      <h1 className={'text-5xl text-center  ' + fugaz.className}>Log In / Register</h1>
      <p className='text-center '>You're one step away!</p>

      <input 
        placeholder='E-mail' 
        type='text'
        className='w-full max-w-[500px] mx-auto px-3 duration-200 hover:border-indigo-600
        focus:border-indigo-600 py-3 border border-indigo-400 rounded-full outline-none'/>

      <input 
        placeholder='Password' 
        type='password'
        className='w-full max-w-[500px] mx-auto px-3 duration-200 hover:border-indigo-600
        focus:border-indigo-600 py-3 border border-indigo-400 rounded-full outline-none'/>


      <div className='flex justify-center py-1'>
        <Button text='Submit' dark />
      </div>

      <p className='text-center'>Don't have an account? <span className='text-indigo-500'>Sign up</span></p>


    </div>
  )
}
