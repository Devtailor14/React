import React from 'react'
import { useState, useEffect } from 'react'
import Cards from './components/Cards'

import axios from 'axios';
const App = () => {

  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setuserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fe'>Loading... </h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
       <Cards elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='text-center fixed text-2xl font-bold mb-4'>Page No: {index}</h1>
      <div className='flex h-[82%] gap-4 flex-wrap p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button onClick={() => {if(index > 1)  setindex(index - 1), setuserData([])}} className='bg-amber-500 text-black px-4 py-2 cursor-pointer active:scale-95 rounded-lg font-semibold text-sm'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={() => {setindex(index + 1), setuserData([])}} className='bg-amber-500 text-black px-4 py-2 cursor-pointer active:scale-95 rounded-lg font-semibold text-sm'>Next</button>
      </div>
    </div>
  )
}


export default App