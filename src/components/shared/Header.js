import HeaderLogo from '../../assets/images/header-logo.jpeg'
import Footer from '../shared/Footer'
import { Link } from "react-router-dom";

const Header = ({children}) => {

    return (
        <>
            
             {/* <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/">
                    <img src={HeaderLogo} alt="Header-Logo" style={{ maxWidth: "20%" }} /> &nbsp; &nbsp;
                    <span className="font-semibold text-xl tracking-tight">Todo</span>
          
                </Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                       
                 <Link to="/view-todos" > 
                   <span className="block mt-4 text-2xl  lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> VIEW</span>
                 </Link>
                 <Link to="/add-todo" > 
                   <span className="block mt-4 text-2xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> ADD</span>
                 </Link>
                </div>
                    <div>
                    <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
                    
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">5</span>
                        <span className="ml-2">notifications </span>   
                    </button>
                </div>
            </div>
            </nav> */}
           
     <nav id="header" className="fixed w-full z-30  top-0 bg-slate-300 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
        <Link to="/">
            <img src={HeaderLogo} alt="Header-Logo" style={{ maxWidth: "15%" }} /> &nbsp; &nbsp;
        
          
        </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            
            <li className="mr-3">
                <Link to="/view-todos" > 
                    <span className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> View</span>
                </Link>
            </li>
            <li className="mr-3">
                <Link to="/add-todo" > 
                    <span className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"> Add</span>
                </Link>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
     <br /><br />

            { children }
        
        <Footer />
    </>
    )
}

export default Header