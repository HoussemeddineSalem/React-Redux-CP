import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

function ListTask({ item , done , id }) {

  const handleChange =() => console.log('changes')
  return <div>
  <Checkbox
    checked={done}
    onChange={handleChange}
    name="checkedB"
    color="primary"
  />
  <p>{item}</p>
  </div>

}

export default ListTask;
