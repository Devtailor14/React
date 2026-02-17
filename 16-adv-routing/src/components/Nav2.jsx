import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
      const navigate = useNavigate()
  return (
    <div>
              <button className='bg-amber-500 px-5 py-2 rounded-lg m-2' onClick={() => navigate('/')}>Return to home page </button>
 <button className='bg-amber-500 px-5 py-2 rounded-lg m-2' onClick={() => navigate(-1)}>Back </button>
 <button className='bg-amber-500 px-5 py-2 rounded-lg m-2' onClick={() => navigate(1)}>Next</button>
    </div>
  )
}

export default Nav2