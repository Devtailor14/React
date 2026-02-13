import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
  //   const data = await response.json()
  //   console.log(data);
  // }

 const [data, setdata] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setdata(response.data)
  }
  return (
    <>
    <div>App</div>
    <button onClick={getData}>Get Data</button>
    {data.map((item,index)=>{
      return(
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      )
    })}
    </> 
  )
}

export default App