// *lib
import { useDispatch } from "react-redux";

// *reducer
import { isDone, deleteTodo } from "../../store/reducerTodo";

const Item = ({item}) => {
    // *hooks
    const dispatch = useDispatch();
    // *func
    const changeIsDone = () => {
        dispatch(isDone({
            id: item.id,
            todo: item.todo,
            isDone: !item.isDone
        }));
    }

    const delTodo = () => {
        dispatch(deleteTodo({
            id: item.id,
            todo: item.todo,
            isDone: item.isDone
        }));
    }
    
    return (
        <li>
            <div className="item">
                <div className="inner">
                    <p className={item.isDone? "completed":""}>{item.todo}</p>
                </div>
                <button onClick={changeIsDone} className={item.isDone? "undo-button":"check-button"}></button>
                <button onClick={delTodo} className="trash-button"></button>
            </div>
        </li>
    );
}
export default Item;