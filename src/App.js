// *lib

// *CSS
import './App.css';

// *component
import Form from './component/form';
import ListTodo from './component/list-todo';

// *hooks
import useTodo from './hooks/todoHook';

function App() {
  // *hooks
  const {todo, todoSet} = useTodo();
  // *state

  // *handler
  const getTodoHandler = (allTodo) => {
    todoSet(allTodo);
  }

  return (
    <div className='container'>
      <h1>todos</h1>
      <Form getTodo={getTodoHandler}/>
      <ListTodo renderTodo={todo}/>
    </div>
  );
}

export default App;
