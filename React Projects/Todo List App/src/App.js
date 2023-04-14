import React, { useState } from "react";
import TodoList from "./TodoList";

/* 1st useState is used for temporary buffer
   2nd is for storing all the items in array*/ 
const App = () => {

  const [inputList, setInputList] = useState("");
  const [listItems, setListItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };
  
  const putEvent = () => {
    setListItems((prevItems) => {
      return [...prevItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    // using filter array fn to remove the selected id items
    console.log("deleted");
    setListItems((prevItems) => {
      return prevItems.filter((arrElt, index) => {
        return index !== id;
      });
    });
  };

  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Task"
            onChange={inputEvent}
            value={inputList}
          />
          <button onClick={putEvent}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {listItems.map((inputList, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={inputList}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
