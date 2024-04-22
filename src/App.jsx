import { useState } from "react";
import "./App.css";
import data from "./data";
import { List } from "./Components/List/List";

function App() {
  let [people, setPeople] = useState(data);

  return (
    <>
      <main className="out-container">
        <div className="inner-container">
          <h1>{people.length} Birth Today</h1>
          <List people={people} />
          <button type="button" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
