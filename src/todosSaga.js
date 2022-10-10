import { call, put, takeEvery} from 'redux-saga/effects';
import { getTodosSuccess } from './todosState'


function* workGetTodosFetch(){
   const todos = yield call (() => fetch('https://jsonplaceholder.typicode.com/todos')) ;
   const formattedTodos = yield todos.json();
   const formattedTodosShortened = formattedTodos.slice(0,20);
   yield put(getTodosSuccess(formattedTodosShortened));
   };

function* todosSaga() {
yield takeEvery('todos/getTodosFetch', workGetTodosFetch);
};

export default todosSaga;