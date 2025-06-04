// To get access from the backend and retrieve data we use axios

import axios from 'axios'

// ✅ Change this to your Render backend URL
const baseURL = "https://todo-fullstack1-backend.onrender.com"

const getAllTodo = (setTodo) => {
    axios
    .get(`${baseURL}`)
    .then(({data}) => {
        console.log('data => ', data);
        setTodo(data)
    })
    .catch((err) => console.log(err))
}

const addTodo = (text, setText, setTodo) => {
    axios
    .post(`${baseURL}/save`, { text })
    .then((data) => {
        console.log(data)
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (todoId, text, setText, setTodo, setUpdate) => {
    axios
    .post(`${baseURL}/update`, { _id: todoId, text })
    .then((data) => {
        setText("")
        setUpdate(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (_id, setTodo) => {
    axios
    .post(`${baseURL}/delete`, { _id })
    .then((data) => {
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

export { getAllTodo, addTodo, updateTodo, deleteTodo }
