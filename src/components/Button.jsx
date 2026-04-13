import React from 'react'

const Button = ({ text, style }) => {
  return (

    <button className={`px-6 py-1.5 rounded-md shadow drop-shadow-sm ${style}`}>
        {text}
    </button>
    )
}

export default Button