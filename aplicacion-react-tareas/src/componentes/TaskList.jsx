import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = () => {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTask(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTask(updatedTasks);
  };

  const completedTask = id => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task;
    });

    setTask(updatedTasks);
  };
  
    return (
    //estos se llaman fragmentos en react para no agregar mas 
    // contenedores
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tareas-lista-contenedor">
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;