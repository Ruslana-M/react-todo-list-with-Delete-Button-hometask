import { useState } from "react";
import "./App.css";

function App() {
  //1. import and create useState for obj
  //2. create HTML layout with Daisy UI  input and submit button and date
  // 3. create function for taking input from user
  //4.  add onSubmit to form with the name of the function submitHandler
  // 5. log value from input
  //6 add value to array and store
  // 7. clean the input line
  // 8. loop with map to display the input in list
  const [todo, setTodo] = useState([]);

  // 3. catch input value onsubmit button click
  function submitHandler(e) {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      text: e.target.newText.value,
      createdDate: new Date(),
    };
    // 6. add input value to the array
    setTodo([...todo, newItem]);
    // clean the input line
    e.target.newText.value = "";
  }
  //filter - to delete todo items from the list
  const clickHandler = (clickedItemId) => {
    const result = todo.filter((i) => i.id != clickedItemId);
    setTodo(result);
  };

  function deleteHandler() {}
  return (
    <div className="App" data-theme="cupcake"> <h1> TO DO List </h1> 
      <div className="input_container">
        <form className="flex" onSubmit={submitHandler}>
          <input
            type="text"
            name="newText"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input className="btn btn-primary" type="submit" value="Add" name="" id="" />
        </form>
      </div>
      <div className= "flex flex-col">
      {todo.map((i, index) => (
        <div key={index} className="todo_list border-solid border-2 border-orange-200 flex w-96 h-30 justify-between bg-white items-center">
          <span className=""> {i.text} 
           </span>
          <button
            onClick={() => clickHandler(i.id)}
            className="btn btn-secondary "
          >
            Delete
          </button>
        </div>
      ))}
      </div>

    </div>
  );
}

export default App;
