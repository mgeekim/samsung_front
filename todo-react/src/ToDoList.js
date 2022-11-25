import ToDo from "./ToDo";

function ToDoList({ toDoList, deleteHandler, updateTodo }) {
  return (
    <ul>
      {toDoList.map((toDo) => (
        <li key={toDo.id}>
          <ToDo
            toDo={toDo}
            deleteHandler={deleteHandler}
            updataToDo={updateTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
