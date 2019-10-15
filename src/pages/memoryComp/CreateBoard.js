import React from "react";
import "../../style/memory.scss";

const CreateBoard = props => {
  const tile = "board__tile";
  const createBoard = props.board.map(item => (
    <div
      className="board"
      onClick={item.disabled ? null : () => props.checkTiles(item.id)}
      key={item.id}
    >
      <img className={`${tile} ${item.active}`} src={item.img} alt="me"></img>
    </div>
  ));
  return createBoard;
};

export default CreateBoard;
