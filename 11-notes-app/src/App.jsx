import { useState } from 'react'


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

  const deleteNote = (index) => {
    const copyTasks = [...tasks]
    copyTasks.splice(index, 1)
    setTasks(copyTasks)
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
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {tasks.map((task, index) => (
            <div key={index} className='flex justify-between flex-col items-center relative rounded-2xl text-black py-9  pb-4 px-4 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] h-52 w-40'>
              <div>
                <h3 className='font-bold text-lg leading-tight'>{task.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{task.details}</p>
              </div>
              <button onClick={() => deleteNote(index)} className='bg-red-500 cursor-pointer active:scale-95 font-bold text-white outline-none py-1 w-full rounded'>Delete</button>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default App