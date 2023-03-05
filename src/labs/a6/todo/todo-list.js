import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
    let key = 0;
    return(
    <>
        <h3>Todo List</h3>
        <ul>
        {
            todos.map(todo => {
                key += 1;
                return(<TodoItem todo={todo} key={key}/>);
            })
        }
        </ul>
    </>
    );
}
export default TodoList;