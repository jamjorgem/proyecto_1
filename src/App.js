import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import GrettingStyled from './components/pure/grettingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <TaskListComponent></TaskListComponent>
      {/* <GrettingStyled name='jorge'></GrettingStyled> */}
      {/* ejemplo de uso de hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre='jorge'>
          {/* todo lo que existe adentro es tratado como props.children 
          <h3>contenido del children</h3>
        </Ejemplo4> */}

      {/* </header> */}
      {/* GESTION DE EVENTOS */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
