import React, { useState } from "react";
import "../styles/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  };

  return (
    <form 
      onSubmit={handleSend} 
      className="tareas-formulario"
    >
      <input
        className="tarea-input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={handleChange}
      />
      <button className="tarea-boton">
        Add task
      </button>
    </form>
  )
};

export default TaskForm;