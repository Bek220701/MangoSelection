import React from "react";
import { data } from "../Data";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <h1 className="text">BEK</h1>
        <div className="blocks">
          {data.map((el, idx) => (
            <div className="block">
              <img src={el.image} alt="img" />
              <h1>{el.title}</h1>
              <h3>{el.description}</h3>
              <h2>{el.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
