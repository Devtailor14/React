import React from 'react'
import myImage from './assets/myImage.png' 
import omImage from './assets/omImage.png'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Dev' age={21} image={myImage}/>    
       <Card user='Om' age={22} image={omImage}/>
    </div>
  )
}  

export default App
