import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // asking if this task has the same ID as the edited task
      if (id === task.id) {
        // we will use the object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />
  ));

  function addTask(name) {
    if(tasks.filter((task) => name == task.name).length==0 && name !=null)
    {
      const newTask = { id: `t-${nanoid()}`, name, completed: false };
      setTasks([...tasks, newTask]);
    }
    else if(name ==null) console.error("You selected empty.")
    else console.error("You already selected this course.")
  }

  const tasksNoun = taskList.length > 1 ? "courses" : "course";
  const headingText = `${taskList.length} ${tasksNoun} listed`;
  return (
    <div className="todoapp stack-large">
      <h1>Student Courses List</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
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