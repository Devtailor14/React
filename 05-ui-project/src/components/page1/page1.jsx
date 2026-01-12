import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const page1 = (props) => {
    console.log(props.users);
  return (
    <div className=' h-screen w-full '>
        <Navbar />
        <Center users={props.users}/>
    </div>
  )
}

export default page1