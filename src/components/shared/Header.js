import HeaderLogo from '../../assets/images/header-logo.jpeg'
import Footer from '../shared/Footer'
import { Link } from "react-router-dom";

const Header = ({children}) => {

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={HeaderLogo} alt="Header-Logo" style={{maxWidth: "20%"}} /> &nbsp; &nbsp;
                    <span className="font-semibold text-xl tracking-tight">Todo</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                       
                 <Link to="/view-todo" > 
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
            </nav>

            { children }
        
        <Footer />
    </>
    )
}

export default Header