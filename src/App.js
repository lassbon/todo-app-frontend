import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header'
import TodoCard from './components/pages/TodoCard';
import Briefcase from './assets/images/briefcase.svg';
import Personal from './assets/images/Personal.svg';
import Food from './assets/images/food.svg';


function App() {

  const AllTodos = [
    {
        "id": "01",
        "name": "Vacation",
        "startDate": "2022-02-26T00:00:00",
        status: 1,
        "imageURL": Personal,
       
    },
    {
      "id": "02",
      "name": "Exercise",
      "startDate": "2022-02-26T00:00:00",
      status: 1,
      "imageURL": Personal,
      
    },
    {
      "id": "03",
      "name": "Work",
      "startDate": "2022-02-26T00:00:00",
      status: 2,
      "imageURL": Briefcase,
      

  },
    {
      "id": "04",
      "name": "Lunch",
      "startDate": "2022-02-26T00:00:00",
      status: 3,
      "imageURL": Food,
      
    },
    {
      "id": "05",
      "name": "Business Proposal",
      "startDate": "2022-02-26T00:00:00",
      status: 2,
      "imageURL": Briefcase,
      
  },
    {
      "id": "06",
      "name": "Read",
      "startDate": "2022-02-26T00:00:00",
      status: 1,
      "imageURL": Personal, 
      
    },
    {
      "id": "07",
      "name": "Dinner",
      "startDate": "2022-02-26T00:00:00",
      status: 3,
      "imageURL": Food,
      
    },
    {
      "id": "08",
      "name": "Entertainment",
      "startDate": "2022-02-26T00:00:00",
      status: 1,
      "imageURL": Personal,
      
    },
    {
      "id": "09",
      "name": "Lights out",
      "startDate": "2022-02-26T00:00:00",
      status: 1,
      "imageURL": Personal,
      
  },
]

  // const colors = [
  //   "bg-blue-400","bg-green-400","bg-red-400", "bg-yellow-400"
  // ]

  function Colors (status) {
    let bgcolor= "bg-pink-500"
      switch(status) {
        case 1:
          bgcolor= "bg-blue-300"
        break;

        case 2:
          bgcolor= "bg-yellow-300"
        break;
        
        case 3:
          bgcolor= "bg-red-400"
        break;  
        default:
           bgcolor="bg-pink-500"
      }

      return bgcolor
  }

  return (
    <>
            <Header /> 

            <div className='container mx-auto'>
                <div className="grid grid-cols-3 gap-10 p-20 border">

                    {
                      
                      AllTodos.map((todo, i) => (
                        <div key={todo.id} data-tip={todo.name} className='grid grid-cols  rounded-3xl '> 
                        {/* {console.log(typeof(todo.status))} */}
                          <TodoCard  name={todo} bgcolor={Colors(todo.status)}/>
                        </div>
                        
                        ))
                    
                    }
                    
  
                    

                </div>
            </div>
        

  
           
    </>         
        
    
  )
}

export default App;
