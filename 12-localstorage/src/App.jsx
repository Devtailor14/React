import React from 'react'

const App = () => {
  const user = {
    usernam: 'Dev',
    age: 21,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))

  console.log(localStorage.getItem('user'))


  return (
    <div>App</div>
  )
}

export default App