
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

const getATodo = async(id) => {
    return fetch(`${baseurl}/get-one-todo/${id}`)
}

const DeleteATodo = async(id) => {
    return fetch(`${baseurl}/delete/${id}`, {
        method: 'DELETE'
    })
}

const addATodo = async (data) => {
  
    return fetch(`${baseurl}/todo/add`, {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:  JSON.stringify(data)
    })
}

export {
    getTodos,
    getATodo,
    DeleteATodo,
    addATodo
}