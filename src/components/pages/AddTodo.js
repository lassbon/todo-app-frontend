const AddTodo = ()=> {
    return (
        <>
            <div className="container mx-auto">
            <div className="grid grid-col-6 gap-4 ml-32">
                <div className="col-span-2"></div>
                <div className=" col-span-2 flex flex-col border border-pink-500 rounded-3 w-3/6 items-center" style={{marginTop: "150px", }}>
                    {/* <p>Add a task</p> */}
                    <form className="flex flex-col w-full p-3" style={{}}>
                        <p className="mb-0">Add a task</p>
                        <input className="w-full border border-zinc-200"  type="text" htmlFor="todo" id="todo" placeholder="Add a task to do here"></input>
                        <button className="bg-red-500 w-1/5 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded" type="submit" >Add Task</button>
                    </form>
                </div>
                <div className="col-span-2"></div>
            </div>
            </div>
        
        </>
    )
}

export default AddTodo;