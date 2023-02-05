// *lib
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

// *hook
import useTodo from "../../hooks/todoHook";

const Form = ({getTodo}) => {
    // *hook
    const {todo, addTodo} = useTodo()

    // *state
    const [input, inputSet] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        let id = nanoid(8);
        let newTodo = input;
        let isDone = false;
        addTodo({id:id, todo:newTodo, isDone:isDone});
        inputSet('');
    }

    useEffect(()=>{
        getTodo(todo);
    }, [todo]);

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <input type="text" value={input} onChange={(e)=> inputSet(e.target.value)} className="input" placeholder="Enter your todo" autoComplete="off" />
                </div>
                <div className="form-control">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;