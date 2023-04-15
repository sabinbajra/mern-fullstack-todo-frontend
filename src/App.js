import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDO } from "./utils/HandleAPi";
import { addToDO , upDateTodo, deleteToDo } from "./utils/HandleAPi";


function App() {

  const [toDo, setToDo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoID,setToDoId] = useState("");
  
  useEffect(() => {
    getAllToDO(setToDo);
  },[]);

  const updateMode = (_id, text) => 
  {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>TO DO APP</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add ToDos"
          value={text}
          onChange={(event) => setText(event.target.value)}
          />

          <div className="add" onClick={isUpdating ? () => upDateTodo(todoID,text,setToDo,setText,setIsUpdating) : () => addToDO(text,setText,setToDo)  }>
            {isUpdating ? "UPDATE" : "ADD"}
          </div>

        </div>

        <div className="list">
          {toDo.map((item) => 
          <ToDo 
          key={item._id} 
          text={item.text} 
          updateMode={() => updateMode(item._id,item.text)} 
          deleteToDo={() => deleteToDo(item._id,setToDo)}></ToDo>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
