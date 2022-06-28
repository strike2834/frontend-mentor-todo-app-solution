import { h } from "preact";
import baseroute from "../baseroute";
import TodoList from "./todolist";

const App = () => (
  <div id="app">
    <TodoList path={`${baseroute}/`} />
  </div>
);

export default App;
