import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const dataArray = [
    "John",
    "Mark",
    "Antoine",
    "Fabrice",
    "Laura",
    "Fabienne",
    "Thomas",
    "Léa",
  ];

  const dataObjects = [
    { name: "John", details: { age: 32, type: "gentil" } },
    { name: "Mark", details: { age: 12, type: "cool" } },
    { name: "Antoine", details: { age: 65, type: "gentil" } },
    { name: "Fabrice", details: { age: 6, type: "flemmard" } },
    { name: "Laura", details: { age: 31, type: "costaud" } },
    { name: "Fabienne", details: { age: 54, type: "gentil" } },
    { name: "Thomas", details: { age: 26, type: "flemmard" } },
    { name: "Léa", details: { age: 62, type: "costaud" } },
  ];

  const [data, setData] = useState(dataArray)
  const [data2, setData2] = useState(dataObjects)

  return (
    <div className="App">
      <div>
        <h1>Data Array</h1>
        <SearchBar list={dataArray} setList={setData}/>
        {data.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <div>
        <h1>Data Objects</h1>
        {/* <SearchBar placeholder={"filter by age"} filterField={(item) => item.details.age.toString()} list={dataObjects} setList={setData2}/> */}
        {/* <SearchBar placeholder={"filter by name"} filterField={(item) => item.name} list={dataObjects} setList={setData2}/> */}
        <SearchBar placeholder={"filter by type"} filterField={(item) => item.details.type} list={dataObjects} setList={setData2} style={{width:"100%"}}/>
        {data2.map((item, index) => <p key={index}>{item.name} | {item.details.age} ans | {item.details.type}</p>)}
      </div>
    </div>
  );
}

export default App;
