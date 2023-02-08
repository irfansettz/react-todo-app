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

        dispatch(addTodo({
            id:nanoid(8), 
            title:input, 
            completed:false}
        ));
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