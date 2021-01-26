import React from "react";

const Todo = ({ handleRemove, item, id }) => {
  const remove = () => handleRemove(id);
  return (
    <div className="Todo" id={id}>
      <li>{item}</li>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Todo;
