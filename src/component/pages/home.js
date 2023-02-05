// *hooks
import useTodo from "../../hooks/todoHook";

// *components
import ListTodo from "../list-todo";
import Form from "../form";

const Home = () => {
    // *hooks
    const {todo, todoSet} = useTodo();

    // *handler
    const getTodoHandler = (allTodo) => {
        todoSet(allTodo);
    }

    return (
        <div className="container">
            <h1>Todos</h1>
            <Form getTodo={getTodoHandler}/>
            <ListTodo renderTodo={todo}/>
        </div>
    );
}

export default Home;