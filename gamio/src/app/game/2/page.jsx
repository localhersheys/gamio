"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import restart from '@/components/game/2/restart.png';
import styles from './style.css'; // Import CSS styles

const Home = () => {
    const [board, setBoard] = useState(Array(9).fill(null)); // Initialize the board with 9 null values
    const [xIsNext, setXIsNext] = useState(true); // Indicates whether X is next to play
    const [winner, setWinner] = useState(null); // Keeps track of the winner

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setWinner(calculateWinner(newBoard));
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];

            }
        }

        return null;
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setXIsNext(true);
    };

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    const statusStyle = xIsNext ? { left: 0 } : { right: 0 }; // Conditionally set position based on xIsNext

    return (
        <main
            className="relative h-[100vh] w-[100vw]"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bg.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                filter: "contrast(140%) brightness(120%)",
            }}
        >
            <h1 className="pixelify-sans title">TIC-TAC-TOE</h1>
            <div className="pixelify-sans status" style={statusStyle}>
                {status}
            </div>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button className="reset" onClick={resetGame}>
                <Image src={restart} alt="restart" width={'100px'} height={'50px'} />
            </button>
        </main>
    );
};

export default Home;