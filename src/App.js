
import React from "react";
import NavBar from "./components/Navbar";
import ListTask from "./components/ListTask";
import { useSelector } from 'react-redux';
import { selectTodoList } from './redux/reduxSlicer'




export default function App() {
  const todoList = useSelector(selectTodoList);
  //console.log(todoList)
  return (
    <div className="App">
      <NavBar />
      <label>Choose </label>

      <select name="#" id="#">
        <option value="">--Please choose an option--</option>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="unDone">unDone</option>
      </select>

      {todoList

      .map(el => {
        return <ListTask
          key={el.id}
          item={el.item}
          done={el.done}
          id={el.id}
        />
      }
      )}




    </div>
  );
}
