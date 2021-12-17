import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Sakhiya Skin Clinic Appointment',
        day: 'Dec 16 at 4:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Elite Gym Time',
        day: 'Dec 16 at 6:00pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Riyaz Mehfil',
        day: 'Dec 16 at 10:30pm',
        reminder: false,
    },
    {
        id:4,
        text: 'Stock Market Opening Bell',
        day: 'Dec 17 at 09:15am',
        reminder: true,
    }
]);

//Saving the Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}

//Deleting Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggling Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Display.'}
    </div>
  );
}


