import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  //useState creation of string type
  const [todo, setTodo] = useState<string>("");

  //creating array of interface
  const [todos, setTodos] = useState<Todo[]>([]);

  //whenever submitting the form, take the event and add the task to the handler
  const handleAdd = (e: React.FormEvent) => {
    //prevent site from refreshing on form submittal
    e.preventDefault();

    //If there is something todo, set the array with the todo, an id#, and if it's done or not
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      {/*Creating heading for app */}
      <span className="heading">Taskify</span>
      {/* Input component */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* Card component */}
      <TodoList todos={todos} setTodos={setTodos} />

      {/* <SingleTodo /> */}
    </div>
  );
};

export default App;
