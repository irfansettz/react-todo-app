// *lib
import { useSelector } from "react-redux";
// *components
import Item from "./item";

const ListTodo = () => {
    // *hooks
    const {value:todos} = useSelector(state => state.todo);

    return (
        <>
            <ul className="todos">
                {
                    [...todos].reverse().map((item) => (
                        <Item item={item} key={item.id}/>
                    ))
                }
            </ul>
        </>
    )
}
export default ListTodo;