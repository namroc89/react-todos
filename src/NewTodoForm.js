import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const [item, setItemData] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ item, id: uuid() });
    setItemData("");
  };

  const handleChange = (evt) => {
    setItemData(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemForm">Item:</label>
        <input
          type="text"
          id="itemForm"
          name="itemForm"
          value={item}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
