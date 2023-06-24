import React, { useEffect, useState } from "react";
import Light from "./light.jsx";

//create your first component
const Home = () => {
  const [active, setActive] = useState(null);
  return (
    <>
	<body>
      <div
        className="container m-auto mt-5 pt-5 pb-5 bg-dark col-2 rounded d-flex flex-column align-items-center"
        onClick={() => setActive(event.target.style.backgroundColor)}
      >
        <Light color="red" active={active} />
        <Light color="yellow" active={active} />
        <Light color="green" active={active} />
      </div>
	</body>
    </>
  );
};

export default Home;
