import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Hello world!",
      done: false,
      id: (+new Date(2022, 1, 1, 10, 33, 30)).toString(36),
      order: 1,
    },
    {
      text: "This is a todo app.",
      done: false,
      id: (+new Date(2022, 2, 28, 7, 24, 16)).toString(36),
      order: 2,
    },
    {
      text: "You can drag the todo to rearrange its order!",
      done: false,
      id: (+new Date(2022, 3, 14, 6, 31, 2)).toString(36),
      order: 3,
    },
    {
      text: "And check the item you have done.",
      done: false,
      id: (+new Date(2022, 4, 20, 19, 4, 5)).toString(36),
      order: 4,
    },
  ]);
  const [text, setText] = useState("");
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const triggerTodo = (id) => {
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[targetIndex].done = !newTodos[targetIndex].done;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeAllDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  const handleAdd = () => {
    addTodo({
      text,
      done: false,
      id: (+new Date()).toString(36),
      order: todos.length + 1,
    });
    setText("");
  };

  const [dragId, setDragId] = useState();
  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragEle = todos.find((todo) => todo.id === dragId);
    const dropEle = todos.find((todo) => todo.id === ev.currentTarget.id);

    const dragEleOrder = dragEle.order;
    const dropEleOrder = dropEle.order;

    const newTodoState = todos.map((todo) => {
      if (todo.id === dragId) {
        todo.order = dropEleOrder;
      }
      if (todo.id === ev.currentTarget.id) {
        todo.order = dragEleOrder;
      }
      return todo;
    });

    setTodos(newTodoState);
  };

  const [darkMode, setDarkMode] = useState(false);
  const triggerDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [filter, setFilter] = useState("all");
  const onRadioGroupChangeValue = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={[style.container, darkMode ? "darkmode" : null].join(" ")}>
      <h1>TODO</h1>
      <button type="button" onClick={() => triggerDarkMode()}>
        DarkMode
      </button>
      <span>{darkMode.toString()}</span>

      <form onSubmit={handleAdd} action="javascript:">
        <label>
          <span>Add Todo</span>
          <input value={text} onInput={handleInputChange} />
        </label>
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos
          .sort((a, b) => a.order - b.order)
          .filter((todo) => {
            if (filter === 'all') return todo;
            if (filter === 'active') return !todo.done;
            if (filter === 'completed') return todo.done;
          })
          .map((todo) => (
            <li
              key={todo.id}
              id={todo.id}
              draggable={true}
              onDragStart={handleDrag}
              onDragOver={(ev) => ev.preventDefault()}
              onDrop={handleDrop}
            >
              <button type="button" onClick={() => triggerTodo(todo.id)}>
                Check
              </button>
              {todo.done ? "O" : "X"}: {todo.text}
              <button type="button" onClick={() => removeTodo(todo.id)}>
                remove
              </button>
            </li>
          ))}
      </ul>

      <span>
        {todos.filter((todo) => todo.done === false).length} items left
      </span>
      <input
        type="radio"
        value="all"
        id="filter-all"
        name="filter"
        onChange={onRadioGroupChangeValue}
        checked={filter === "all"}
      />
      <label htmlFor="filter-all">All</label>
      <input
        type="radio"
        value="active"
        id="filter-active"
        name="filter"
        onChange={onRadioGroupChangeValue}
        checked={filter === "active"}
      />
      <label htmlFor="filter-active">Active</label>
      <input
        type="radio"
        value="completed"
        id="filter-completed"
        name="filter"
        onChange={onRadioGroupChangeValue}
        checked={filter === "completed"}
      />
      <label htmlFor="filter-completed">Completed</label>
      <button type="button" onClick={() => removeAllDoneTodos()}>
        Clear Completed
      </button>

      <p>Drag and drop to reorder list</p>
    </div>
  );
};

export default TodoList;
