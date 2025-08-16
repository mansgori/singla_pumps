import React from 'react'

const Button = (children) => {
  return (
    <button className="bg-Redlogo px-4 py-2 font-bold text-white rounded hover:bg-red-600 transition">
          {children}
    </button>
  )
}

export default Button
