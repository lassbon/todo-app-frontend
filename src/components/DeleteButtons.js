const DeleteButtons = ({HandleClick}) =>{


    return(

        <div>
            <button class="bg-emerald-400 btn bnt-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5 mb-5"onClick={()=> HandleClick("Please make amendment")}>Edit</button>
            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5" onClick={() => HandleClick("Todo successfully deleted !")}>Delete</button>
        </div>
    )
}
export default DeleteButtons