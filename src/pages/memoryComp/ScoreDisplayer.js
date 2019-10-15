import React from "react";
import "../../style/memory.scss";

const ScoreDisplayer = props => {
  return (
    <div className="final__score">
      {props.playerScore > props.CPUScore ? (
        <p>Congratulations You have won Your time: {props.finalTime}</p>
      ) : (
        <p>You lose try again Your time: {props.finalTime}</p>
      )}
    </div>
  );
};

export default ScoreDisplayer;
