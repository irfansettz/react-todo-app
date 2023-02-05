import { useState } from "react"

const useTodo = () => {
    const [todo, todoSet] = useState([]);

    const addTodo = (newTodo) => {
        let lastTodo = [...todo];
        lastTodo.push(newTodo);
        todoSet(lastTodo);
    };

    return {todo, todoSet, addTodo};
}

export default useTodo;