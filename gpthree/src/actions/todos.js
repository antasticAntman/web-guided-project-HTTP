import axios from 'axios';

const baseUrl = 'http://localhost:3001';
const todoUrl = baseUrl + '/todos';

const getTodos = () => {
    return axios.get(todoUrl)
    .then(res=> res.data
    )
}

export const postTodo = (description) => {
    const todo = {
        description: description,
        isDone: false,
    }
    return axios.post(todoUrl, todo);
}

export const putTodo = (todo) =>{
    return axios.put(`${todoUrl}/${todo.id}`, todo)
}

export const deleteTodo = (id) => {
    return axios.delete(`${todoUrl}/${id}`)
}


export default getTodos
