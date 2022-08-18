import React from "react";
import "../styles/Task.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Task = ({ id, text, completed, completedTask, deleteTask }) => {
  return (
    <div className={completed ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div 
        className="tarea-texto"
        onClick={() => completedTask(id)} >
        {text}
      </div>
      <div 
        className="tarea-contenedor-iconos" 
        onClick={() => deleteTask(id)} >
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  );
}

export default Task;