
import { useEffect, useState } from 'react';
import TodoCard from '../ViewTodo/components/TodoCard';
import Briefcase from '../../../assets/images/briefcase.svg';
import Personal from '../../../assets/images/personal.svg';
import Food from '../../../assets/images/food.svg';
import Header from "../../shared/Header";
import { getTodos } from '../../../network/api'
import { Link } from 'react-router-dom'

const  ViewTodo = () => {

  const [todos, setTodos] = useState([])



  useEffect(() => {
    
   (async() => {

      const response = await getTodos()
     const data_ = await response.json() 
    //  localStorage.setItem("todo", JSON.stringify(data_.data))
    //  localStorage.getItem("todo")
      setTodos(data_.data)
     
    })()
    
 }, [])



  function Colors(id) {
    let lasVal = parseInt(id.charAt(id.length - 1))
    let bgcolor = "bg-blue-200"
        switch(lasVal) {
          case 1:
          case 5:
          case 7:
            bgcolor= "bg-blue-300"
          break;
          case 2:
          case 4:
          case 8:
            bgcolor= "bg-yellow-300"
          break;
          case 6:
          case 3:
          case 9:
            bgcolor= "bg-red-400"
          break;  
          default:
            bgcolor="bg-blue-200"
        }

        return bgcolor
  }

  return (


    <Header>
            <div className='container mx-auto'>
                <div className="grid grid-cols-3 gap-10 p-20 border">

          {  
            todos.map((todo, i) => (

                       <Link to={`/view-todo/${todo.todo_id}`}>
                          <div key={todo.todo_id} data-tip={todo.title} className='grid grid-cols  rounded-3xl '> 
                          {/* {console.log(typeof(todo.status))} */}
                            <TodoCard  name={todo} bgcolor={Colors(todo.todo_id)}/>
                          </div>
                        </Link>
                        
                        ))
                    
                    }
                    
  
                    

                </div>
            </div>
        

   
    
   </Header>       
        
    
  )
   
}

export default ViewTodo;
