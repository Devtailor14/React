
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 px-8 bg-cyan-800 item-center justify-between'>
            <h2 className='text-2xl font-bold'>Dev</h2>
            <div className='flex gap-10'>
                <Link to="/" className='text-lg font-medium'>Home</Link>
                <Link to="/about" className='text-lg font-medium'>About</Link>
                <Link to="/courses" className='text-lg font-medium'>Courses</Link>
                <Link to="/product" className='text-lg font-medium'>Product</Link>

            </div>

        </div>
    )
}

export default Navbar