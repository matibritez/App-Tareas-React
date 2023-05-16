import { useState } from 'react';
import './App.css';

function App() {

  const [ newTaskName, setNewTaskName ] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('tasks', newTaskName)
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input 
           type='text'
           placeholder='Enter a new Task'
           onChange={(e)=> setNewTaskName(e.target.value)}
         />
        <button> Save Task</button>
      </form>
    </div>

  );
}

export default App;
