import { Fragment, useState } from "react";

function ToDo({ toDo, deleteHandler, updateToDo }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState(toDo.title);

  function updateHandler(e) {
    setUpdateMode(true);
  }

  function changeHandler(e) {
    setTitle(e.target.value);
  }

  if (!updateMode) {
    return (
      <li>
        {toDo.title}{" "}
        <button onClick={() => deleteHandler(toDo.id)}>삭제</button>
        <button onClick={updateHandler}>수정</button>
      </li>
    );
  } else {
    return (
      <>
        <input type="text" value={title} onChange={changeHandler} />
        <button
          onClick={() => {
            updateToDo({ id: toDo.id, title: title });
            setUpdateMode(false);
          }}
        >
          수정
        </button>
      </>
    );
  }
}

export default ToDo;
