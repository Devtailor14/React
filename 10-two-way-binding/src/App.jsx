import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Submitted by', title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(event)=>{
        submitHandler(event)
      }}>
        <input type="text" value={title} onChange={(event)=>{
          settitle(event.target.value)
        }} placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App