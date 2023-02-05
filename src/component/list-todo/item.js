// *lib
import { useEffect, useState } from "react";

const Item = ({item}) => {
    // *state
    const [itemState, itemStateSet] = useState({});
    // *func
    const changeIsDone = () => {
        itemStateSet({
            id: itemState.id,
            todo: itemState.todo,
            isDone: !itemState.isDone
        });
    }

    const deleteTodo = () => {
        itemStateSet({});
    }
    // *useEffect
    useEffect(() => {
        itemStateSet(item);
    }, [item]);
    
    if (Object.keys(itemState).length <= 0) return;
    return (
        <li>
            <div className="item">
                <div className="inner">
                    <p className={itemState.isDone? "completed":""}>{itemState.todo}</p>
                </div>
                <button onClick={changeIsDone} className={itemState.isDone? "undo-button":"check-button"}></button>
                <button onClick={deleteTodo} className="trash-button"></button>
            </div>
        </li>
    );
}
export default Item;