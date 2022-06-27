import { h } from "preact";

import TodoList from "./todolist";

const App = () => (
  <div id="app">
    <TodoList path="/" />
  </div>
);

export default App;
