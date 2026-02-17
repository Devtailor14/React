import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center'>
        <Link to={'/product/men'} className='text-lg font-medium'>Men</Link>
        <Link to={'/product/women'} className='text-lg font-medium'>Women</Link>
        <Link to={'/product/kids'} className='text-lg font-medium'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product