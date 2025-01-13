import React from 'react'
import { gradients, months, dayList, baseRating, demoData } from '@/utils'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Calendar(props) {

  const { demo } = props;

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const numOfWeeks = ((daysInMonth + firstDay) > 35) ? 6 : 
    (month === 2 && firstDay === 0 && ((year % 4) !== 0)) ? 4 : 5;
  const actualDays = [firstDay, firstDay + daysInMonth - 1]
  const currentCalendarDay = day + firstDay;



  return (
    <div className='py-3'>
      {Array(numOfWeeks).fill(0).map((element, elementIndex) => {
        return (
          <div className='grid grid-cols-7 gap-1.5 py-1'>
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {

              // this is the total counting of divs from 0 to end of last row week including non-days
              const dayCount = dayOfWeekIndex + (7 * elementIndex); 

              if(dayCount < actualDays[0] || dayCount > actualDays[1])
              {
                return(
                  <div className=''></div>
                )
              }

              let coloredDay = false;

              let colors = demo ?
                (function() {coloredDay = true; return gradients['indigo'][baseRating[dayCount.toString()]];}  )(): 
                (dayCount.toString() in demoData) ?
                (function() {coloredDay = true; return gradients['indigo'][demoData[dayCount.toString()]];}  )() :
                 'white'; 

              let borderColor = ( day === (dayCount - actualDays[0] + 1) ) ? 'border border-2 border-black ' : 
                coloredDay ? '' : 'border border-solid border-indigo-200';

              return (
                <div style={{ background: colors }} className={ borderColor + ' rounded-lg p-3 '}>

                  <p className={(coloredDay ? 'text-white ' : 'text-indigo-500 ') + fugaz.className}>{dayCount - actualDays[0] + 1}</p>
                </div>

              )
            })}
          </div>
        )
      })}
    </div>
  )
}





  {/* 
       - get current day month year
       - figure out how many days in current month
       - figure out what day current month starts on
       - figure out how many rows are needed for weeks
       - make grid that is 7xrows
        - make array that is rows big
        - map it and return divs where each div has grid-cols-7
       - have words fill in where there should be days 
       */}
