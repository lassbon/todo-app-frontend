import EmptyImg from '../../assets/images/empty.png'
import {Link} from 'react-router-dom'
const Empty = () => {

    return (
        <>
            
            <section>
                <div className=" grid mx-auto">
                <div className=" mx-auto p-10 text-center">
                        <img src={EmptyImg} alt="Todo" className='w-full mx-auto' />
                     Nothing was found<br />
                       Click <Link to="/" className='text-green-600 underline'> here</Link> to go back home
                </div>

                </div>
            </section>

         </>
 
    )
}

export default Empty