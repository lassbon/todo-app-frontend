import DeleteButtons from "./components/DeleteButtons"
// import RecycleBinIcon from '../components/RecycleBinIcon.jpg'
import recyclingreuse from '../../../assets/images/recyclingreuse.gif'
import CapturePNG from '../../../assets/images/capture.png'
import { useState } from "react"

const DeleteTodo =() =>{

// let [Delete, setDelete]= useState("")

function HandleClick(message){
    alert(message)
}
    return(
    <div className="container-fluid">
        <div className="h-screen flex items-center justify-center bg-gray-200" >
            <div className="w-1/3 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center">
                <img src={CapturePNG}  alt="#" className="w-full  rounded-t-lg bg-gradient-to-r"/>
                <div className="flex justify-center">
                    <img src={recyclingreuse} alt="#" className="w-40 rounded-full object-center border-4 border-white -mt-10 shadow-lg align-center" />
                </div>
                <p className="font-bold pt-3 pb-2 text-2xl">Todo Title</p>
                <p className="font-bold pt-3 pb-2 text-2xl">Todo content</p>
                <p className="font-bold px-10 mb-5 text-gray-500" >Todo Date</p>
                <p className="font-semibold p-2 text-blue-500 px-10 py-2 mb-5 hover:text-blue-700 text-xl">Are you sure you want to <br/>permanently delete this content</p>
                <DeleteButtons HandleClick={HandleClick}/>           
            </div>
            
        </div>

    </div>
    )
}
export default DeleteTodo