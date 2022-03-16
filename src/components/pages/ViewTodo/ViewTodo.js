import DeleteButtons from "./components/DeleteButtons"
// import RecycleBinIcon from '../components/RecycleBinIcon.jpg'
import recyclingreuse from '../../../assets/images/recyclingreuse.gif'
import CapturePNG from '../../../assets/images/capture.png'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../../shared/Header";
import { getATodo, DeleteATodo } from '../../../network/api'
import { getCategoryNameUsingEnumKey} from '../../../utils/utils'

const ViewTodo = () => {

    const Redirect = useNavigate()

    const params = useParams()
    const [todo, setTodo] = useState([])
    const [deleteMessage, setDeleteMessage ] = useState("")

    useEffect(() => {
        ( async() =>{
            
            const response = await getATodo(params.id)
            const { data } = await response.json()
        console.log("here: ", data[0].id,  data[0].title)
           setTodo(data[0])

        })()

    }, [])



    const HandleDeleteClick = async () => {
         
       const deleteResp = await DeleteATodo(params.id)
        const { message, status } = await deleteResp.json()
        if (status === true) {
            alert(message);

            Redirect('/view-todos')


        } else {
            alert(message)
        }

   }
    
    
    return (
        <Header>
            <br /><br /><br />
      
        <div className="p-10">
            <div className="flex items-center justify-center" >
                <div className="w-8/12 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center">
                    <div className="flex justify-center">
                        <img src={recyclingreuse} alt="#" className="w-40 rounded-full object-center border-4 border-white -mt-10 shadow-lg align-center" />
                        </div>
                        
                        <p className="font-bold pt-3 pb-2 text-2xl">{getCategoryNameUsingEnumKey(todo.category)}</p>
                        <p className="font-bold pt-3 pb-2 text-2xl">{todo.title}</p>
                        <p className="font-bold pt-3 pb-2 text-2xl">{todo.contents}</p>
                        <p className="font-bold px-10 mb-5 text-gray-500" > { todo.todo_date}</p>
                        <p className="font-bold px-10 mb-5 text-gray-500" > { todo.todo_time}</p>
                    <DeleteButtons HandleClick={HandleDeleteClick}/>           
                </div>
                
            </div>

                </div>
     </Header>
    )
}
export default ViewTodo