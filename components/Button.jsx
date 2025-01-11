import React from 'react'

export default function Button(props) {

    const {text} = props;

  return (
    <div>
       <button className="bg-white text-blue-900 border-blue-900 border-solid border-2 rounded-full overflow-hidden border-2">
            <p className="px-6 whitespace-nowrap py-2">
            {text}
            </p>
        </button> 
    </div>
  )
}
