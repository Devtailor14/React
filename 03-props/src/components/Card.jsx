import React from 'react'

const Card = (props) => {  // ← Add { image } to receive the prop
  console.log(props);
  return (
    <div className='card'>
      <img src={props.image} alt="" />  
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card