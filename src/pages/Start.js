import React from "react";
import "../style/start.scss";
import img1 from "../images/mountainProject.png";

const Start = () => {
  return (
    <>
      <div className="main__start">
        <img className="start__image" src={img1} alt="mountain" />

        <div className="start__abilities">
          <h3>Front-End Developer</h3>
          <p>CSS | SASS | HTML | JavaScript | React.js | GitHub | BEM</p>
        </div>
      </div>
    </>
  );
};

export default Start;
