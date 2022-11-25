function ToDoList({ toDoList, deleteHandler }) {
  return (
    <ul>
      {toDoList.map((toDo) => (
        <li key={toDo.id}>
          {toDo.title}
          <button onClick={() => deleteHandler(toDo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
