// import Textarea from "@material/"
import './App.css';
// import 'tw-elements';

function UpdateTodo() {
  return (
    <div>
    <div className="p-8 rounded border border-gray-200">
  <h1 className="font-medium text-3xl text-center">Edit Todo</h1>
  

  <form>
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="mt-5">
        <label for="name" className="text-sm text-gray-700 block mb-1 font-medium">Title</label>
        <input type="text" name="name" id="name" className="form-control font-normal border-gray-200 rounded py-3 px-3 block text-gray-700 w-full focus:text-gray-700 transition ease-in-out m-0 focus:outline-none focus:border-blue-600 focus:bg-white bg-clip-padding border border-solid " placeholder="" />
      </div>
     

      
      <div class="datepicker  form-floating  xl:w-full" data-mdb-toggle-button="true">
        <label for="floatingInput" class="text-sm font-medium text-gray-700 mb-64">Select a date</label>
      
    <input type="text"
      class="form-control mt-10 ml-3 font-normal border-gray-200 rounded py-3 px-3 block text-gray-700 w-full focus:text-gray-700 transition ease-in-out m-0 focus:outline-none focus:border-blue-600 focus:bg-white bg-clip-padding border border-solid"
      placeholder="" />
    <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
      
    </button>
  </div>  
  <div class="timepicker relative form-floating mb-3 xl:w-full">
  <label for="floatingInput" className="text-gray-700 mt-3" style={{marginLeft:"-10px"}}>Select a time</label>
    <input type="text"
      className="form-control mt-14 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
  </div>
  <div>
        <label for="email" className="text-sm text-gray-700 block mb-1 font-medium">Your Todo</label>
        {/* <Textarea  color="Blue"
            size="sm"
            outline={true}  /> */}
            <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
      </div>
</div>

      

    <div className="space-x-6 mt-8">
      <div className="flex-col justify-center">
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 ">Save</button>

     
      <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
    </div>
    </div>
  </form>
</div>
    </div>
  );
}

export default UpdateTodo;
