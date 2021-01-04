import "./App.css";

import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import TodoItem from "./TodoItem";
import db from "./firebase";
import firebase from "firebase";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(()=>{
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snaphsot)=>{
      setTodos(
        snaphsot.docs.map((doc) => ({
          todoText: doc.data().todoText,
          id: doc.id,
          time:doc.data().time,
        }))
      );
    })
  },[]);
  const addTodo = (event) => {
    event.preventDefault();
    let tempInput = input.trim();
    if (tempInput.length !== 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      db.collection('todos').add({
        todoText:input,
        timestamp : timestamp,
        time:new Date().valueOf(),
      })
      setInput("");

    }
  };
  return (
    <div className="App">
      <h1>ToDos 😂</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          onClick={addTodo}
          color="primary"
          disabled={!input}
        >
          Add Todo 🔥
        </Button>
      </form>
      <ul class="todoList">
        {todos.map((todoItem) => (
          <TodoItem todoItem={todoItem} key={todoItem.id} time={
            timeAgo.format(new Date(Number(todoItem.time)),'twitter')} />
        ))}
      </ul>
    </div>
  );
}

export default App;
