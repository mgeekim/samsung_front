const ToDoList = ({ toDoList }) => {
  return (
    <ul>
      {toDoList.map((toDo) => (
        <li key={toDo.id}>{toDo.title}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
