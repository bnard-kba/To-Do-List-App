import React, { useRef } from "react";
import "./styles.css";

//Creating object for useState types
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
//Created component with todo property
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  // user reference for input
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    //creating input form, box and button
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // gets rid of blur
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        //whenever inputting, set the todo to the provided input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
