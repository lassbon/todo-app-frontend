import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import ViewTodo from './components/pages/ViewTodo/ViewTodo'
import AddTodo from './components/pages/AddTodo/AddTodo'
import DeleteTodo from './components/pages/DeleteTodo/DeleteTodo'
import './App.css'


function App() {

 
  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="view-todo" element={<ViewTodo />} />    
            <Route path="/view-todo/:id" element={<DeleteTodo />} />
            <Route path="add-todo" element={<AddTodo />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>   

        
    
  )
   
}

export default App;
