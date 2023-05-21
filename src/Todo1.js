import React, { useEffect, useState } from "react";
import "./App.css";

function TodoList({ data, removeEvent }) {
  return data.map((name, index) => (
    <li key={index}>
      {name}
      <button className="button-83" role="button" onClick={() => removeEvent(index)}>Delete</button>
    </li>
  ));
}

function MyTodo() {
  const [inputEntry, setinputEntry] = useState("");
  const [inputArr, setInputArr] = useState([]);

  function handleEvent(event) {
    setInputArr([...inputArr, inputEntry]);
  }

  function removeEvent(index) {
    let tempArr = [...inputArr];
    tempArr.splice(index, 1);
    setInputArr(tempArr);
  }

  const [searchq, setSearchq] = useState("");
  const [searchInput, setSearchInput] = useState("");
  //   console.log(">>>>",searchInput)
  //   console.log(">>>>",search)
  
  function Search() {
    let searchq = inputArr.filter((x) => x.includes(searchInput));
    console.log(">>>", searchq);
    // return setSearchq;
  }
  return (
    <>
      <input
       className="button-83"
        type="text"
        value={inputEntry}
        onChange={(e) => setinputEntry(e.target.value)}
      />

      <button className="button-83" role="button" onClick={handleEvent}>add item</button>

      <TodoList  className="button-83"  data={inputArr} removeEvent={removeEvent} />

      <input
       className="button-83"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>

      <button className="button-83" role="button" value={searchInput} onClick={Search}>
        s
      </button>
      <p>{searchq}</p>
    </>
  );
}
export default MyTodo;
