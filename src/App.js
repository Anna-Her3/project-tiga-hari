import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosFetch } from './todosState';
import './App.css';

function App() {
const todos = useSelector( state => state.todos.todos);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getTodosFetch())
}, [dispatch]);
console.log(todos)

  return (
    <div className='App'>
      <h1>Todos List</h1>
      <p>Here 20 of 200 todos that u must do it !!</p>
      <hr/>
      <div className='Gallery'>
        {todos.map( todos =>
          <div key={todos.id} className='row'>
            <div className='colomn colomn-right'>
              
              <h2>{todos.id}. {todos.title}</h2>
              
            </div>

          </div>
               
        )}
      </div>

    </div>
   
  );
}

export default App;
