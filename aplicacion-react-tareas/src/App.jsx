import './App.css';
import Logo from './componentes/Logo';
import TaskList from './componentes/TaskList';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <TaskList />
        {/* <Task text="Mama" completed={true}/> */}
      </div>
    </div>
    
  );
}

export default App;
