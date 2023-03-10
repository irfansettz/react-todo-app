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
            title: item.title,
            completed: !item.completed
        }));
    }

    const delTodo = () => {
        dispatch(deleteTodo({
            id: item.id,
            title: item.title,
            completed: item.completed
        }));
    }
    
    return (
        <li>
            <div className="item">
                <div className="inner">
                    <p className={item.completed? "completed":""}>{item.title}</p>
                </div>
                <button onClick={changeIsDone} className={item.completed? "undo-button":"check-button"}></button>
                <button onClick={delTodo} className="trash-button"></button>
            </div>
        </li>
    );
}
export default Item;