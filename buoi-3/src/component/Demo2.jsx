import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function WellCome2(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mouted or updated" + props.name);
  });

  return (
    <>
      <h1>Demo 2</h1>
      <Link to="/page_1">
        Go to page 1
      </Link>
    </>
  );
}

export default WellCome2;
