// *lib
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// *hooks
import useFetcher from "../../hooks/fetcher";
// *redux
import { addTodo } from "../../store/reducerTodo";

const Form = () => {
    // *hook
    const dispatch = useDispatch();
    const {fetcher, load, getFetcher} = useFetcher();
    const [fetch, setFetch] = useState(true);

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

    // *useEffect
    const lamdaUrl = 'https://ap34h3b3tbwzeslbrwqcsfo2xy0qdffn.lambda-url.ap-southeast-1.on.aws';
    useEffect(() => {
        // *get endpoint once only
        if (fetch) {
            getFetcher({url: lamdaUrl}); 
            setFetch(!fetch);
        }
        // *add fetcher to redux if load finished
        if (!load) {
            [...fetcher].map((item) => {
                return dispatch(addTodo({id:nanoid(8), title:item.title, completed:  item.completed}));
            })
        } 
    } , [load, fetcher]);

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