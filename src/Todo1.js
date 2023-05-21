import React, { useEffect, useState } from "react";

function TodoList({ data, removeEvent }) {
  return data.map((name, index) => (
    <li key={index}>
      {name}
      <button onClick={() => removeEvent(index)}>Delete</button>
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
    return searchq;
  }
  return (
    <>
      <input
        type="text"
        value={inputEntry}
        onChange={(e) => setinputEntry(e.target.value)}
      />

      <button onClick={handleEvent}>add item</button>

      <TodoList data={inputArr} removeEvent={removeEvent} />

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>

      <button value={searchInput} onClick={Search}>
        s
      </button>
      <p>{searchq}</p>
    </>
  );
}
export default MyTodo;
