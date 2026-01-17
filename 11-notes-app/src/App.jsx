import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(title, details);

    setTitle('')
    setDetails('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(event) => submitHandler(event)} className='flex  gap-5 lg:w-1/2 flex-col items-start p-10 ' >
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium py-2  w-full rounded border-2 outline-none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          className='px-5 font-medium py-2 h-32 flex items-start w-full rounded border-2 outline-none'
          placeholder='Write Details'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-white font-medium text-black outline-none px-5 py-2 w-full rounded'>Add Note</button>

      </form>
      <div className=' lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='rounded-2xl bg-white h-52 w-40'></div>
          <div className='rounded-2xl bg-white h-52 w-40'></div>
          <div className='rounded-2xl bg-white h-52 w-40'></div>

        </div>

      </div>
    </div>
  )
}

export default App