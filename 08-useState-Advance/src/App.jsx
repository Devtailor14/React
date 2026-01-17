import React, { use, useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user: 'Dev', age: 22})
    const btnClicked = () => {
      const newnum = {...num}
      newnum.user = 'Pihu'
      newnum.age = 23
      setnum(newnum)
    }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
} 

export default App