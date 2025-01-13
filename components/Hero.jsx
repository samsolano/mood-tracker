import React from 'react'
import Button from "@/components/Button";
import Calendar from './Calendar';
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Hero() {
  return (
    <div className="flex flex-col py-6 px-10 gap-8">

        <h1 className={'text-5xl text-center ' + fugaz.className }><span className='textGradient'>Broodl </span> 
          helps you track your <span className='textGradient'>daily </span>mood!</h1>

        <h4 className='text-xl max-w-[500px] text-center w-full mx-auto ' >Create your mood record and see how you feel on <span className='font-semibold '>every day of every year.</span></h4>

        {/* <div className="grid grid-cols-2 gap-4"> */}
        <div className='grid grid-cols-2 gap-4 mx-auto w-fit'>
            <Button text="Sign up"/>
            <Button text="Login" dark/>
        </div>
        <Calendar demo />

    </div>
  )
}
