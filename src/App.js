
import React from "react";
import NavBar from "./components/Navbar";
import ListTask from "./components/ListTask";
import { useSelector } from 'react-redux';
import { selectTodoList } from './redux/reduxSlicer'




export default function App() {
const todoList = useSelector(selectTodoList);
  return (
    <div className="App">

    {todoList.map(el =>
      { 
        return <ListTask
        item={el.item}
        done ={el.done}
        id = {el.id}
         />
      }
      )}


      <NavBar />

    </div>
  );
}
