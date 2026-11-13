// import { useState } from "react";

// function Student(props) {
//   return <h3>Student Name: {props.name}</h3>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Student name="Ravi" />
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="card">
      <h1>Student Details</h1>
      <p>Name: Teja</p>
      <p>Course: ReactJS</p>
      <p>Marks: 90</p>
    </div>
  );
}

export default App;
