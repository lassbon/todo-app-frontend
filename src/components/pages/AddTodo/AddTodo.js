import Header from "../../shared/Header";
import { useState } from "react";
import { category } from "../../../enums/enums";
import { addATodo } from '../../../network/api'
import { useNavigate } from "react-router-dom";

const AddTodo = () => {

    const Redirect = useNavigate()

    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [category_, setCategory_] = useState(category)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    function checkMate(e) {

        console.log(e)
        setCategory_(e) 

    }


   async function handlehtmlFormSubmision(e) {
        e.preventDefault()
        const data = {
            title: title,
            contents: contents,
            category: category_,
            todo_date: date,
            todo_time: time
        }
       
 
       
       console.log("hereeee: ", data)
       const response = await addATodo(data)
       const { message, status } = await response.json()
       if (status === true) {
           alert(message)
           Redirect('/view-todos')
       }
       
  
    }

    return (
   
        <Header>
            <br /><br /><br />
            <div className="container mx-auto">
                <form className="w-full mx-auto max-w-lg" onSubmit={handlehtmlFormSubmision}>
 
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Title
                        </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"
                            onChange={(e)=>setTitle(e.target.value) } value={title}  required  />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Category
                            </label>
                            <select className="block uppercase w-full tracking-wide text-gray-700 text-xs p-3 border font-bold mb-2"
                            onChange={ (e) => checkMate(e.target.value)} >
                               <option value=""> -select category </option>
                                {
                                   
                                    Object.keys(category_).map(key =>  {
                                        return <option value={key} key={key}> { category_[key]} </option>
                                      })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Contents
                         </label>
                         <textarea  onChange={(e)=>setContents(e.target.value) }  value={contents}  required  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" ></textarea>   
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Date
                        </label>
                        <input onChange={(e)=>setDate(e.target.value) }  value={date} required  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Time
                        </label>
                        <input onChange={(e)=>setTime(e.target.value) }  value={time} required  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="time" placeholder="Albuquerque" />
                        </div>
                             
                    </div>
                    <br />
                        <button type="submit"className="btn bg-slate-100 p-5">Add Todo</button>
                    <br />
                </form>
            </div>
            <br />  <br />
        
        </Header>
 
    )
}

export default AddTodo;