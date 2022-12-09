import { useState } from "react";
const ToDo = ({ todo, deleteHandler, updateTodo }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const changHandler = (e) => {
    setTitle(e.target.value);
  };
  const updateHandler = () => {
    updateTodo({ id: todo.id, title: title });
    setUpdateMode(false);
  };
  if (!updateMode) {
    return (
      <>
        {todo.title}
        <button onClick={() => deleteHandler(todo.id)}>삭제</button>
        <button onClick={() => setUpdateMode(true)}>수정</button>
      </>
    );
  } else {
    return (
      <>
        <input type="text" value={title} onChange={changHandler} />
        <button onClick={updateHandler}>수정</button>
      </>
    );
  }
};

export default ToDo;