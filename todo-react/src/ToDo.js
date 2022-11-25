import { useState } from "react";

const ToDo = ({ toDo, deleteHandler, updataToDo }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState(toDo.title);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const updateHandler = () => {
    updataToDo({ id: toDo.id, title: title });
    setUpdateMode(false);
  };
  if (!updateMode) {
    return (
      <>
        {toDo.title}
        <button onClick={() => deleteHandler(toDo.id)}>삭제</button>
        <button onClick={() => setUpdateMode(true)}>수정</button>
      </>
    );
  } else {
    return (
      <>
        <input
          type="text"
          value={title}
          onChange={changeHandler}
          onClick={() => setTitle("")}
        />
        <button onClick={updateHandler}>수정</button>
      </>
    );
  }
};

export default ToDo;
