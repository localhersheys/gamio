"use client";
import { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  var fruits = [
    "apple",
    "grapes",
    "kiwi",
    "orange",
    "pineapple",
    "strawberry",
    "watermelon",
  ];
  var rows = 10;
  var columns = 10;
  var score = 0;
  var board = [];

  function randomfruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
  }
  function dragStart() {
    let current_tile = this;
  }
  function dragDrop() {
    let other_tile = this;
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function dragLeave() {}
  function dragEnd() {
    if (
      current_tile.src.includes("blank") ||
      other_tile.src.includes("blank")
    ) {
      return;
    }
    let currCoords = current_tile.id.split("-");
    let r1 = parseInt(currCoords[0]);
    let c1 = parseInt(currCoords[1]);
    let otherCoords = other_tile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
    let left = c2 == c1 - 1 && r1 == r2;
    let right = c2 == c1 + 1 && r1 == r2;
    let up = c2 == c1 && r2 == r1 - 1;
    let down = c2 == c1 && r2 == r1 + 1;
    let adj = left || right || up || down;
    if (adj) {
      let currImg = current_tile.src;
      let otherImg = other_tile.src;
      current_tile.src = otherImg;
      other_tile.src = currImg;
      isvalid = checkvalidity();
      if (!isvalid) {
        let currImg = current_tile.src;
        let otherImg = other_tile.src;
        current_tile.src = otherImg;
        other_tile.src = currImg;
      }
    }
  }
  function generate() {
    for (let c = 0; c < columns; c++) {
      for (let r = rows - 1; r >= 0; r--) {
        if (board[r][c].src.includes("blank")) {
          board[r][c].src = "/collection/" + randomfruit() + ".png";
        }
      }
    }
  }
  function crushfruit() {
    crushFive();
    crushFour();
    crushThree();
    document.getElementById("points").innerText = score;
  }
  function crushThree() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 2; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          score = score + 30;
        }
      }
    }
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 2; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          score = score + 30;
        }
      }
    }
  }
  function crushFour() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 3; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        let fruit4 = board[r][c + 3];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          fruit4.src = "/blank.png";
          score = score + 40;
        }
      }
    }
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 3; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        let fruit4 = board[r + 3][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          fruit4.src = "/blank.png";
          score = score + 40;
        }
      }
    }
  }
  function crushFive() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 4; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        let fruit4 = board[r][c + 3];
        let fruit5 = board[r][c + 4];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          fruit4.src == fruit5.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          fruit4.src = "/blank.png";
          fruit5.src = "/blank.png";
          score = score + 50;
        }
      }
    }
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 4; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        let fruit4 = board[r + 3][c];
        let fruit5 = board[r + 4][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          fruit4.src == fruit5.src &&
          !fruit1.src.includes("blank")
        ) {
          fruit1.src = "/blank.png";
          fruit2.src = "/blank.png";
          fruit3.src = "/blank.png";
          fruit4.src = "/blank.png";
          fruit5.src = "/blank.png";
          score = score + 50;
        }
      }
    }
  }
  function checkvalidity() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 4; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        let fruit4 = board[r][c + 3];
        let fruit5 = board[r][c + 4];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          fruit4.src == fruit5.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 4; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        let fruit4 = board[r + 3][c];
        let fruit5 = board[r + 4][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          fruit4.src == fruit5.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 3; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        let fruit4 = board[r][c + 3];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }

    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 3; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        let fruit4 = board[r + 3][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          fruit3.src == fruit4.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 2; c++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r][c + 1];
        let fruit3 = board[r][c + 2];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 2; r++) {
        let fruit1 = board[r][c];
        let fruit2 = board[r + 1][c];
        let fruit3 = board[r + 2][c];
        if (
          fruit1.src == fruit2.src &&
          fruit2.src == fruit3.src &&
          !fruit1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    return false;
  }
  function slide() {
    for (let c = 0; c < columns; c++) {
      let flag = rows - 1;
      for (let r = rows - 1; r >= 0; r--) {
        if (!board[r][c].src.includes("blank")) {
          board[flag][c].src = board[r][c].src;
          flag--;
        }
      }
      for (let r = flag; r > 0; r--) {
        board[r][c].src = "/blank.png";
      }
    }
  }

  function startGame() {
    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < columns; c++) {
        let chunk = document.createElement("img");
        chunk.id = r.toString() + "-" + c.toString();
        chunk.src = "/collection/" + randomfruit() + ".png";
        chunk.addEventListener("dragstart", dragStart);
        chunk.addEventListener("dragend", dragEnd);
        chunk.addEventListener("dragenter", dragEnter);
        chunk.addEventListener("dragover", dragOver);
        chunk.addEventListener("dragleave", dragLeave);
        chunk.addEventListener("drop", dragDrop);
        document.getElementById("board").append(chunk);
        row.push(chunk);
      }
      board.push(row);
    }
    console.log(board);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      crushfruit();
      slide();
      generate();
    }, 120);

    startGame();

    return () => clearInterval(interval);
  }, []);

  return (
    <body className={styles.bodyContainer}>
      <h1>
        Points:
        <span className={styles.points} id="points">
          0
        </span>
      </h1>
      <div className={styles.board} id="board">
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <img
              key={`${rowIndex}-${colIndex}`}
              src={tile.src}
              id={`${rowIndex}-${colIndex}`}
              draggable
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              onDragEnter={dragEnter}
              onDragOver={dragOver}
              onDragLeave={dragLeave}
              onDrop={dragDrop}
              alt={tile.src.split("/").pop().split(".")[0]}
            />
          ))
        )}
      </div>
    </body>
  );
};

export default Home;
