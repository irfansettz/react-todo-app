// *components
import ListTodo from "../list-todo";
import Form from "../form";

const Home = () => {
    return (
        <div className="container">
            <h1>Todos</h1>
            <Form/>
            <ListTodo/>
        </div>
    );
}

export default Home;