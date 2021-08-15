import React from "react";
//import { createStore } from 'redux';
import { useDispatch } from 'react-redux';
import { saveToDo } from '../redux/reduxSlicer'
//import { Navbar, Container } from "react-bootstrap";



function NavBar() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const addTodo = () => {
        console.log('helloWorld');
        dispatch(saveToDo({
            item: input,
            done: false,
            id: Math.random()
        }))
    }



    return (
        <div>
            <form>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addTodo();
                    }
                    }
                >
                    Submit
                </button>

            </form>

        </div>
    );

}

export default NavBar;

