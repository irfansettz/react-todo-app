// *lib
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducerTodo";

const Form = () => {
    // *hook
    const dispatch = useDispatch();

    // *state
    const [input, inputSet] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('todo tidak boleh kosong');
            return;
        }
        let id = nanoid(8);
        let newTodo = input;
        let isDone = false;
        dispatch(addTodo({id:id, todo:newTodo, isDone:isDone}));
        inputSet('');
    }

    return (
        <>
            <form className="form-todo" onSubmit={submitHandler}>
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