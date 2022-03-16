import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import ViewTodos from './components/pages/ViewTodos/ViewTodos'
import AddTodo from './components/pages/AddTodo/AddTodo'
import ViewTodo from './components/pages/ViewTodo/ViewTodo'
import './App.css'


function App() {

 
  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="view-todos" element={<ViewTodos />} />    
            <Route path="/view-todo/:id" element={<ViewTodo />} />
            <Route path="add-todo" element={<AddTodo />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>   

        
    
  )
   
}

export default App;
