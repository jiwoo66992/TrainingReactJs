import { Fragment } from "react";
import "./App.css";
import Car from "./comp/Car";
import Counter from "./comp/Counter";

//  Component
// Change -> update
// type : stateless, statefull
// Class Component <=> Functional component

function App() {
  return (
    <>
      {/* <Car name="Moto" id='100' /> */}
      <Counter />
    </>
  );
}

export default App;
