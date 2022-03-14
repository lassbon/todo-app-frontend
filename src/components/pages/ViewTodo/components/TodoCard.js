import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageURL from '../../../../assets/images/personal.svg';

const TodoCard = ({ name, bgcolor }) => {

    const obj = useParams()
   console.log(obj.id)

    
    return(
       

            <div className="flex flex-row w-full rounded-3xl">
                <div className= {` ${bgcolor} w-1/4  text-white text-3xl font-semibold p-10 rounded-lg`} >
                    <img src={imageURL} alt="personal"></img>
                </div>
                <div className=" flex flex-grow
                  justify-between space-x-4 p-5 border border-blue-200 shadow-md rounded-lg hover:bg-rosh-100 transition ease-in duration-300">
                    <div>
                    <h2 className="text-2xl"><b>{name.title}</b></h2>
                    <h3 className="text-1xl"><b>{name.contents}</b></h3>
                        <h5>{name.craeted_at}</h5>
                    </div>
                    <input type="checkbox" className=" my-8 checked:bg-blue-500 ..." />
                </div>
               
            </div>


               
    )
}

export default TodoCard




{/* <div className="flex flex-row items-center space-x-4 p-5 border border-blue-200 shadow-md rounded-lg hover:bg-rosh-100 transition ease-in duration-300"> 
<div className="grid grid-cols-2 gap 4 p-20 border"> 
    
    <div className="grid-cols-4 flex-auto w-8 border bg-blue-500">
    <svg className="w-10'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 
        128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 
        512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
    </svg>
    </div>

    <div className="grid-cols-8 flex-auto w-80">
        <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Vacation</h2>
            <span className="text-gray-700">hello</span>
        </div>
    </div>

   

</div>
 */}

  