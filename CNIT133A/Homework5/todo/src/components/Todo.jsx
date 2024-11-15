function Todo(props) {
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-text" htmlFor={props.id}>
          {props.name}
        </label>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)} hidden={props.completed}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{viewTemplate}</li>;
}

export default Todo;  