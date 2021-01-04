import { InputBase } from "@material-ui/core";
import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import "./style.css";

const EditableView = (props) => {
  const [editable, setEditable] = useState(false);
  const [input, setInput] = useState(props.todoItem.todoText);
  console.log("edit");
  const updateThis = () => {
    edit();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("todos").doc(props.todoItem.id).set(
      {
        todoText: input,
        timestamp: timestamp,
        time: new Date().valueOf(),
      },
      { merger: true }
    );
  };
  const edit = ()=>{
    setEditable(!editable);
  }
  const view = () => {
    return editable ? (
      <>
        <InputBase
          value={input}
          onBlur={updateThis}
          autoFocus 
          className="inp"
          multiline="true"
          onChange={(event) => setInput(event.target.value)}
        ></InputBase>
      </>
    ) : (
      <p  onClick={edit}>{input}</p>
    );
  };
  return view();
};



export default EditableView;
