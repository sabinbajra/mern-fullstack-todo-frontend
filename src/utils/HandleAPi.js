import axios from 'axios'

const baseUrl = "https://mern-fullstack-todo-backend.onrender.com";


const getAllToDO = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

const addToDO = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`,{text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllToDO(setToDo);

    }).catch((err) => console.log(err))
}


const upDateTodo = (todoID, text, setToDo, setText, setIsUpdating) => {

    axios.post(`${baseUrl}/update`,{_id:todoID,text})
    .then((data) => {
        console.log(data);
        setText("");
        setIsUpdating(false);
        getAllToDO(setToDo);

    }).catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo ) => {

    axios.post(`${baseUrl}/delete`,{_id})
    .then((data) => {
        console.log(data);
        getAllToDO(setToDo);

    }).catch((err) => console.log(err))
}

export {getAllToDO, addToDO, upDateTodo, deleteToDo}


