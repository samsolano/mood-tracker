import React from 'react'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Button(props) {

    const {text, dark} = props;

  return (
    <div>
       <button className={(dark ? ' text-white bg-indigo-600 ' : ' text-indigo-600 ') + 'bg-white text-indigo-600 border-indigo-600 border-solid border-2 rounded-full overflow-hidden border-2'}>
            <p className={"px-6 whitespace-nowrap py-2 " + fugaz.className}>
            {text}
            </p>
        </button> 
    </div>
  )
}
