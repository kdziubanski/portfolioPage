import React, { Component } from "react";
import "../style/memory.scss";
import img1 from "./memoryComp/images/img1.jpg";
import img2 from "./memoryComp/images/img2.png";
import img3 from "./memoryComp/images/img3.png";
import img4 from "./memoryComp/images/img4.png";
import img5 from "./memoryComp/images/img5.png";
import img6 from "./memoryComp/images/img6.jpg";
import CreateBoard from "./memoryComp/CreateBoard";
import ScoreDisplayer from "./memoryComp/ScoreDisplayer";

class Memory extends Component {
  state = {
    board: [
      {
        id: 1,
        img: img1,
        active: "",
        name: "steam",
        disabled: false
      },
      {
        id: 2,
        img: img1,
        active: "",
        name: "steam",
        disabled: false
      },
      {
        id: 3,
        img: img2,
        active: "",
        name: "bird",
        disabled: false
      },
      {
        id: 4,
        img: img2,
        active: "",
        name: "bird",
        disabled: false
      },
      {
        id: 5,
        img: img3,
        active: "",
        name: "phone",
        disabled: false
      },
      {
        id: 6,
        img: img3,
        active: "",
        name: "phone",
        disabled: false
      },
      {
        id: 7,
        img: img4,
        active: "",
        name: "instagram",
        disabled: false
      },
      {
        id: 8,
        img: img4,
        active: "",
        name: "instagram",
        disabled: false
      },
      {
        id: 9,
        img: img5,
        active: "",
        name: "elder",
        disabled: false
      },
      {
        id: 10,
        img: img5,
        active: "",
        name: "elder",
        disabled: false
      },
      {
        id: 11,
        img: img6,
        active: "",
        name: "tree",
        disabled: false
      },
      {
        id: 12,
        img: img6,
        active: "",
        name: "tree",
        disabled: false
      }
    ],
    startTime: 1,
    finalTime: undefined,
    turn: "player",
    mode: true,
    aiRevealedCard: [],
    playerScore: 0,
    CPUScore: 0
  };
  componentDidMount() {
    let newBoard = this.state.board;
    for (let i = newBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = newBoard[i];
      newBoard[i] = newBoard[j];
      newBoard[j] = temp;
    }
    this.setState({ board: newBoard });
  }

  playerTurn() {}

  mixTiles() {
    let newBoard = this.state.board;
    for (let i = newBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = newBoard[i];
      newBoard[i] = newBoard[j];
      newBoard[j] = temp;
    }
    this.setState({ board: newBoard });
  }

  //start button
  startButton = () => {
    const startTime = new Date().getTime();
    let board = this.state.board.map(item => (item.active = "hide"));
    this.setState({ startTime, turn: "player", board });
    this.mixTiles();
  };

  //checking it first or second click
  checkTiles = e => {
    const boardLength = this.state.board.filter(
      item => item.active === "reveal"
    );
    if (this.state.turn === "player") {
      //first click
      if (boardLength.length === 0) {
        //reveal tiles changing class of element
        const board = this.state.board.map(item => {
          if (item.id === e) {
            //class reveal and disabled onclick
            item.active = "reveal";
            item.disabled = true;
            return item;
          } else return item;
        });
        this.setState({ board });
        //second click
      } else if (boardLength.length === 1) {
        const board = this.state.board.map(item => {
          if (item.id === e) {
            //class reveal and disable onclick
            item.active = "reveal";
            item.disabled = true;
            return item;
          } else return item;
        });
        //update board and go to checkwin function
        this.setState({ board });
        this.checkWin();
      }
    }
  };

  //check win start end game function
  checkWin = () => {
    let board = this.state.board;
    let checkBoard = this.state.board.filter(item => item.active === "reveal");
    setTimeout(() => {
      //if tiles are the same make class disable
      if (checkBoard[0].name === checkBoard[1].name) {
        board = board.map(item => {
          if (item.active === "reveal") {
            item.active = "disabled";
            return item;
          } else return item;
        });
        if (this.state.turn === "player") {
          this.setState({ board, playerScore: this.state.playerScore + 1 });
        } else {
          this.setState({ board, CPUScore: this.state.CPUScore + 1 });
        }
        //start end game function
        this.endGame();
      } else {
        //if there are different make class hide and enable onclick
        board = board.map(item => {
          if (item.active === "reveal") {
            item.active = "hide";
            item.disabled = false;
            return item;
          } else return item;
        });
        this.setState({ board });
        if (this.state.mode === true) {
          if (this.state.turn === "player") {
            this.setState({ turn: "aiTurn" });
            this.aiTurn();
          } else if (this.state.turn === "aiTurn") {
            this.setState({ turn: "player" });
            this.playerTurn();
          }
        }
      }
    }, 1000);
  };

  //checking game is over
  endGame = () => {
    let winBoard = this.state.board.filter(item => item.active === "disabled");
    let board = this.state.board;
    setTimeout(() => {
      if (winBoard.length === 12) {
        const endTime = new Date().getTime();
        const finalTime = (endTime - this.state.startTime) / 1000;
        board = board.map(item => {
          item.active = "hide";
          item.disabled = false;
          return finalTime;
        });
        this.setState({ finalTime });
      } else {
        if (this.state.mode === true) {
          if (this.state.turn === "player") {
            this.playerTurn();
          } else if (this.state.turn === "aiTurn") {
            this.aiTurn();
          }
        }
      }
    }, 1000);
  };

  aiTurn = e => {
    let ides = this.state.board.filter(item => item.active === "hide");
    ides = ides.map(item => {
      return item.id;
    });
    for (let i = ides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = ides[i];
      ides[i] = ides[j];
      ides[j] = temp;
    }
    const card1 = ides[0];
    const card2 = ides[1];
    let board = this.state.board.map(item => {
      if (item.id === card1) {
        item.active = "reveal";
        return item;
      } else if (item.id === card2) {
        item.active = "reveal";
        return item;
      } else return item;
    });

    this.setState({ board });
    this.checkWin();
  };
  //when i will build unbeatable AI
  // aiSecondMove = (firstCard, obj, firstCardName) => {
  //   let aiRevealedCard = this.state.aiRevealedCard;
  //   let newArray = this.state.aiRevealedCard;
  //   if (aiRevealedCard.length === 0) {
  //     aiRevealedCard.push(obj);
  //   } else {
  //     newArray = newArray.filter(item => item.id === firstCard);
  //     if (newArray.length !== 0) {
  //       aiRevealedCard.concat(newArray);
  //     }
  //   }
  //   console.log(aiRevealedCard, firstCard, firstCardName);
  // };
  gameType = e => {
    this.setState({ mode: !this.state.mode });
  };

  render() {
    const { board, finalTime, playerScore, CPUScore } = this.state;

    return (
      <div className="memory">
        <h1 className="memory__title">Memory Game try it out</h1>
        <div className="memory__choose">
          <label>
            <input
              type="checkbox"
              checked={this.state.mode}
              onChange={this.gameType}
            />
            Play with CPU
          </label>
        </div>

        <div className="memory__button">
          <button className="memory__button-btn" onClick={this.startButton}>
            Start
          </button>
        </div>
        {finalTime ? (
          <ScoreDisplayer
            finalTime={finalTime}
            playerScore={playerScore}
            CPUScore={CPUScore}
          />
        ) : null}
        <div className="score">
          <h5 className="score__result">Player: {this.state.playerScore}</h5>
          <h5 className="score__result">CPU: {this.state.CPUScore}</h5>
        </div>
        <div className="memory__board">
          <CreateBoard checkTiles={this.checkTiles} board={board} />
        </div>
      </div>
    );
  }
}

export default Memory;
