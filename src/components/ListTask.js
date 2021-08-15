import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo, editCheck } from '../redux/reduxSlicer'
import { selectTodoList } from '../redux/reduxSlicer'
function ListTask({ item, done, id }) {

  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

 
  const handleChange = () => {
    
    const checkState = () => todoList.findIndex(el => el.id === id);
    dispatch(
      editCheck(
        checkState()
      )
    )
  }
  const breakThrough =(style)=> done ?
   style = {textDecoration : 'line-through'} :
   style = {backgroundColor : 'none'}  ;

  const handleDelete = () => {
    dispatch(
      deleteToDo(
        [
          todoList.findIndex(el => el.id === id), 1
        ]
      )
    )
  }
  const [content, setContent] = React.useState(false)
  console.log(content)

  const allowEdit = () => setContent(!content)

 console.log(content)
  const handleEdit = (e) =>
    dispatch(
      editToDo(
        [
          todoList.findIndex(el => el.id === id),
          1,
          e.currentTarget.textContent
        ]
      )
    )
  //console.log(todoList.findIndex(el => el.id === id))
  return <div>
    <Checkbox
      checked={done}
      onChange={handleChange}
      name="checkedB"
      color="primary"
    />
    <p
      contentEditable={`${content}`}
      onInput={handleEdit}
      style = {breakThrough()}>
      {item}
      </p>
    <button onClick={handleDelete}>delete task</button>
    <button onClick={allowEdit}> {!content ? <span>edit</span> : <span>save edit</span> }</button>
  </div>

}

export default ListTask;
