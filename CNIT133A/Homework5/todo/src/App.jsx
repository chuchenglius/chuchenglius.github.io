import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>
    ));   
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <Form />
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