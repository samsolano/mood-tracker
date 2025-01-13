import React from 'react'
import { Fugaz_One } from 'next/font/google';
import Calendar from './Calendar';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Dashboard() {



  const moods = {
    '&*@#$': '😭',
    'Sad': '😢',
    'Existing': '😶',
    'Good': '😊',
    'Elated': '😍',
  }

  return (
    <div className='px-4'>


      <div className=' text-indigo-500 bg-indigo-50 rounded-lg grid grid-cols-3 px-5 py-5 flex justify-between'>
        <div >
          <p className=''>Num Days</p>
          <h2 className={'' + fugaz.className}>14</h2>
        </div>
        <div>
          <p className=''>Time Remaining</p>
          <h2 className={'' + fugaz.className}>14:13:12</h2>
        </div>
        <div>
          <p className=''>Date</p>
          <h2 className={'' + fugaz.className}>Thu Jul 11 2024</h2>
        </div>
      </div>

      <h1 className={'text-center p-8 text-5xl ' + fugaz.className}>How do you <span className='textGradient'>feel</span> today?</h1>


      <div className='grid grid-cols-6 sm:grid-cols-5 gap-6 px-1 py-10'>

        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button className=' purpleShadow flex flex-col items-center rounded-xl py-6 bg-indigo-50 col-span-2 sm:col-span-1 gap-3'>
              <h1  className='text-3xl '>{moods[mood]}</h1>
              <h4 className={'text-indigo-500 ' + fugaz.className}>{mood}</h4>
            </button>
          )
        })
        }
      </div>


      <Calendar />



    </div>
  )
}
