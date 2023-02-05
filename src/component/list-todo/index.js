// *lib
import Item from "./item";

const ListTodo = ({renderTodo}) => {
    
    return (
        <>
            <ul className="todos">
                {
                    renderTodo.reverse().map((item) => (
                        <Item item={item} key={item.id}/>
                    ))
                }
            </ul>
        </>
    )
}
export default ListTodo;