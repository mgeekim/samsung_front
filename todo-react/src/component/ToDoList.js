import ToDo from "./ToDo";

function ToDoList({ toDoList, deleteHandler, updateToDo }) {
  //   const [updateMode, setUpdateMode] = useState(false);

  return (
    <ul>
      {toDoList.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          deleteHandler={deleteHandler}
          updateToDo={updateToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
