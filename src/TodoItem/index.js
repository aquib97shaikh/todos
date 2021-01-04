import { InputBase, List, ListItem, } from "@material-ui/core";
import React , {useState} from "react";
import db from "../firebase";
import firebase from 'firebase';
import "./style.css";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditableView from "../EditableView"



  
// const TodoItem = (props) => {
//     const [input,setInput] = useState(props.todoItem.todoText);
//     const deleteThis = ()=>{
//         db.collection('todos').doc(props.todoItem.id).delete();
//     }
//     const updateThis = ()=>{
//         const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//         db.collection('todos').doc(props.todoItem.id).set({
//             todoText :input,
//             timestamp:timestamp,
//             time:new Date().valueOf()
//         },{merger:true,});
//     }

//   return (
//     <div className="todoItem">
//       <div className="todo-text-container">
//       <p className="show-input">{input}</p>
//         <InputBase
//           value={input}
//           onBlur={updateThis}
//           className="inp"
//           multiline="true"
//           onChange={(event) => setInput(event.target.value)}
//         ></InputBase>
//         <span >{props.time}</span>
//       </div>
      
      
//       <DeleteForeverRoundedIcon  className="delete-icon" onClick={deleteThis} size="large" />
//     </div>
//   );
// };
const TodoItem = (props) => {
  const deleteThis = () => {
    db.collection("todos").doc(props.todoItem.id).delete();
  };

  return (
    <div className="todoItem">
      <div className="todo-text-container">
        <EditableView todoItem = {props.todoItem}></EditableView>
        <span>{props.time}</span>
      </div>

      <DeleteForeverRoundedIcon
        className="delete-icon"
        onClick={deleteThis}
        size="large"
      />
    </div>
  );
};

export default TodoItem;
