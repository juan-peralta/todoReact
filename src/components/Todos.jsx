import Todo from "./Todo"

const Todos = ({todos, deleteTodo, updateTodo}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Todos</h2>
            <ul className="list-group">
                {
                    todos.map(todo => (
                       <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    ))
                }
                {
                    !todos.length && <li className="list-group-item">Sin todos</li>
                 }
            </ul>
        </div>
    )
}
export default Todos