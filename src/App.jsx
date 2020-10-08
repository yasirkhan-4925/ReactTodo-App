import React from 'react'
import Header from './Components/Header.jsx'
import Todo from './Todo.jsx'



class App extends React.Component{
   
   render(){
      return(
         <>
          <Header/>
          <Todo/>

         </>
      )
   }
}

export default App 