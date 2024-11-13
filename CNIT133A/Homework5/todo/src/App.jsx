import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>
    ));
    function addTask(name) {
      const newTask = { id: "id", name, completed: false };
      setTasks([...tasks, newTask]);
      }        
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <Form addTask={addTask}/>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;