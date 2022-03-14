
//  
//  .then(response => response.json())
//  .then(dataRes => {
//    setTodos(dataRes.data)
//  })
//  .catch(e =>{
//    console.log(`error: ${e}`)
//  })

const baseurl = process.env.REACT_APP_BASE_URL;


const getTodos = async () => {

    return fetch(`${baseurl}/list-all-todos`)
}

const getATodo = async() => {
    return fetch(`${baseurl}/list-all-todos`)
}

export {
    getTodos,
    getATodo
}