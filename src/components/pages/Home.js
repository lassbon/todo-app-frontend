import homeTodo from '../../assets/images/homeTodo.jpeg'

const Home = () => {

    return (
        <>
            
            <section>
                <h1 className='p-5 text-2xl text-center'> Welcome to our todo app</h1>
            </section>
            <section>
                <div className="w-full grid grid-cols-1 gap-10 p-20 text-center">
                <div className="hero container max-w-screen-lg mx-auto pb-10">
                        <img src={homeTodo} alt="Todo" className='' />
                     
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                            Start here
                        </button>
                </div>

                </div>
            </section>

         </>
 
    )
}

export default Home