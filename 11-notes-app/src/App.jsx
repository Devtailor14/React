import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (event) => {
    event.preventDefault()

    const copyTasks = [...tasks] 
    copyTasks.push({ title, details })
    setTasks(copyTasks)

 
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
          placeholder='Write Details here'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-white active:scale-95 font-medium text-black outline-none px-5 py-2 w-full rounded'>Add Note</button>

      </form>
      <div className=' lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {tasks.map((task, index) => (
            <div key={index} className='relative rounded-2xl text-black py-9 px-4 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] h-52 w-40'>
              
              <h3 className='font-bold text-xl leading-tight'>{task.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{task.details}</p>
            </div>
          )) }

        </div>

      </div>
    </div>
  )
}

export default App