import React from 'react'
import Button from "@/components/Button";
import Calendar from './Calendar';

export default function Hero() {
  return (
    <div className="flex flex-col py-4 gap-4">

        <h1><span>Broodl</span> helps you track your <span>daily </span>mood!</h1>

        <h4>Create and mood record and see how you feel on every day of every year.</h4>

        <div className="grid grid-cols-2 gap-4">
            <Button text="Sign up"/>
            <Button text="Login"/>
        </div>
        <Calendar />

    </div>
  )
}
