import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo, editCheck } from '../redux/reduxSlicer'
import { selectTodoList } from '../redux/reduxSlicer'
function ListTask({ item, done, id }) {

  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const checkState = () => todoList.findIndex(el => el.id === id);

  const handleChange = () => {


    dispatch(
      editCheck(
        checkState(),

      )
    )
  }
  const breakThrough = (style) => done ?
    style = { textDecoration: 'line-through' } :
    style = { backgroundColor: 'none' };

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
  const allowEdit = (e) => {

    switch (content) {
      case false: setContent(!content); break;
      case true: {
        setContent(!content);
        dispatch(
          editToDo(
            {
              newInput: e.target.
              previousSibling.previousSibling.innerHTML,
              index: todoList.findIndex(el => el.id === id)
            }
          )
        );

      }; break; 
      default : 


    }
  }




  // const handleEdit = (e) => {

  //   dispatch(
  //     editToDo(

  //       {
  //         newInput: e.currentTarget.innerHTML,
  //         index: todoList.findIndex(el => el.id === id)
  //       }
  //     )

  //   );
  //   e.preventDefault();
  // }
  // const myFunction = (e) => {
  //   if (e.key === 'Enter') {
  //     setContent(false)
  //     dispatch(
  //       editToDo(

  //         {
  //           newInput: e.currentTarget.closest(".save-edit").innerHTML,
  //           index: todoList.findIndex(el => el.id === id)
  //         }
  //       )

  //     );

  //   }
  // }

  return <div>
    <Checkbox
      checked={done}
      onChange={handleChange}
      name="checkedB"
      color="primary"
    />
    <p
      
      contentEditable={`${content}`}
      suppressContentEditableWarning={true}
      // onInput={handleEdit}
      style={breakThrough()} >
      {item}
    </p>

    {/* <input
      type='text'
      onChange={handleEdit}
      value={item}
      style={breakThrough()}

    /> */}



    <button onClick={handleDelete}>delete task</button>
    <button onClick={allowEdit}> {!content ? 'edit' : 'save edit'}</button>
  </div>

}

export default ListTask;
