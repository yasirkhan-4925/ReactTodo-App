import React from 'react'
import TextField from './Components/TextField'
import FloatingButton from './Components/FloatingButton'
import Buttons from './Components/Buttons'
class Todo extends React.Component{
     constructor(){
          super()
          this.state={

            todos:[{title:"yasir khan" ,edit:false} , {title:"wasi bin ayub", edit:false} , {title:"sameer ali", edit:false}],
            value: ""


          }
     }


     onchangehandler=(e)=>{
          this.setState({
              value:e.target.value
          })
     }

     addtodo=()=>{

        if(!this.state.value) return
 
        let obj = {title:this.state.value}

        
         this.setState({
             todos:[...this.state.todos,obj],
             value:""
         })
     }

     delete_todo=(i)=>{
          
        this.state.todos.splice(i,1)

        this.setState({
            todos:this.state.todos
        })
       
     }

     edit_todo = (i) => {

        this.state.todos[i].edit=true

        this.setState({
            todos:this.state.todos
        })
          
     }

     editchange = (e,i) =>{
          
        this.state.todos[i].title = e.target.value
        this.setState({
            todos:this.state.todos
        })
     }

     update_todo = (i)=>{

        this.state.todos[i].edit=false
        this.setState({
             todos:this.state.todos
        })
          
     }


     render(){

        let {todos,value} = this.state
          return(
             <>
                 
                 <div className="container">

                     <div className="row ">

                         <div className="col-2"></div>

                         <div className="col-8" >
                             <TextField value={value} onchange={(e)=>this.onchangehandler(e)}/>
                            
                         </div>


                         <div className="col-2">

                             <FloatingButton addbtn={this.addtodo}/>

                         </div>



                     </div>

                 </div>


                 <div className="container border my-5">
                     <div className="row">
                                 
                      <ul className="todolist">
                          {/* <li className="listitem">yasir </li>
                         <li className="listitem" >yasir </li>
                          <li className="listitem">yasir </li> */}

                          {todos.map((v,i)=>{

                          return <li key={i} className="listitem"> 

                          {v.edit ? <input  onChange={(e)=>this.editchange(e,i)}  className="editinput"  type="text"/> : v.title}

                          {v.edit ? <button type="button" onClick={()=>this.update_todo(i)}  className="btn btn-outline-primary">update</button>  : <button type="button" onClick={()=>this.edit_todo(i)} className="btn btn-outline-primary">Edit</button>   }
                          
                        
                          <button type="button" onClick={()=>this.delete_todo(i)} className="btn btn-outline-primary">Delete</button>  </li>
                          

                          })}

                      </ul>

                     </div>
                 </div>


             </>
            
          )
     }
}

export default Todo