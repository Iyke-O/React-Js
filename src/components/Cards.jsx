import React from 'react'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
        <div className="bg-teal-400 rounded-md shadow drop-shadow-sm text-white flex items-center justify-center h-80">
            This is a card
        </div>

        <div className="bg-blue-400 rounded-md shadow drop-shadow-sm text-white flex items-center justify-center h-80">
            This is a card
        </div>

        <div className="bg-red-400 rounded-md shadow drop-shadow-sm text-white flex items-center justify-center h-80">
            This is a card
        </div>

    </div>
  )
}

export default Cards