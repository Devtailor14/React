import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightText = (props) => {
    console.log(props.users);
  return (
    <div id='right' className='h-full rounded-4xl overflow-auto   p-6 flex flex-nowrap
     gap-10 w-2/3'>
    {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightText