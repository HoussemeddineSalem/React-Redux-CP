
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
      
      {todoList.map(el => {
        return <ListTask
          item={el.item}
          done={el.done}
          id={el.id}
        />
      }
      )}




    </div>
  );
}
