import ToDo from "./ToDo";

const ToDoList = ({ toDoList, deleteHandler, updateToDo }) => {
  return (
    <ul>
      {toDoList.map((toDo) => (
        <li key={toDo.id}>
          {/* {toDo.title}{" "}
          <button onClick={() => deleteHandler(toDo.id)}>삭제</button> */}
          <ToDo
            toDo={toDo}
            deleteHandler={deleteHandler}
            updateToDo={updateToDo}
          />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
