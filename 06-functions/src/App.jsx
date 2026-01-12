import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Button Clicked");
  }

  function mouseEnter(){
    console.log("Mouse Enter");
  }

  function inputChange(){
    console.log("User is Typing");
  }
  return (
    <div>
      <div 
       onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }}
     className='box' >
        
      </div>
      <input type="text" onChange={inputChange} placeholder='Enter Your Name' />
      <h1>Hello Dev</h1>
      <button onClick={btnClicked}>Change User</button>
      <button onMouseEnter={mouseEnter} >Explore This</button>
    </div>
  )
}

export default App