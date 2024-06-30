import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // importing BrowserRouter and Routes from 'react-router-dom' for navigation.

// importing components in main rendering.
import Home from './components/Home';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';


function App() {

  // State Management.
  const [tasks, setTasks] = useState([]);
  const btnEdit = true;
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  // Functions.
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task)=>
      task.id === updatedTask.id?updatedTask:task
    ))

  };

  const deleteTask = (id) => {
      setTasks(tasks.filter((task)=>
        task.id !== id
      ))
  };


  return (
                                        // JSX
    <>

     <BrowserRouter>  {/*Using BrowserRouter for navigation. */}
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />

          <Route exact path='/tasks' element={<><TaskInput tasks={tasks} onSubmit={addTask}/><div className='container' style={{marginBottom: "155px"}}><div className="row goto-form-btn g-5">{tasks.map((task) => (
            <div className="col-md-4">
            <TaskList tasks={task} key={task.id} onUpdate={updateTask} onDelete={deleteTask} btnEdit={btnEdit}/>
            </div>
            ))}</div></div></>} />

      </Routes> 
    </BrowserRouter>  

    </>
  );
}

export default App;
