import './App.css';
import React, {useState, useEffect} from 'react';
import getTodos, { deleteTodo, postTodo, putTodo } from './actions/todos';


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
console.log(todo)
  useEffect(()=>{
    getTodos().then(res=>{
      getData();
    });
  },[])

  const getData = () => {
    getTodos().then(res => {
      setTodos(res)
    })
  }

  const addTodo = () => {
    postTodo(todo).then(()=>{
      getData();
    })
  }

  const completeTodo = (todo) => {
    const newTodo = {...todo, isDone: true}
    putTodo(newTodo).then(()=>{
      getData();
    })
  }

  const deleteTodoItem = id => {
    deleteTodo(id).then(()=>{
      getData();
    })
  }

console.log(todo)
  return (
    <div className="App">
      <input value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button onClick={()=>addTodo()}>Submit</button>
      {todos.map((todo, index)=>{
        return(
          <div key={index}>
            <span className={todo.isDone ? 'done': ''}>{todo.description}</span>
            <span>
              {todo.isDone ? <button onClick = {()=>deleteTodoItem(todo.id)}>Delete</button> : <button onClick={()=> completeTodo(todo)}>Complete</button>}
            </span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
