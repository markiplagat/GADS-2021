import React, {useEffect, useState} from 'react';
import styles from './style.css';
import GameNumber from "./GameNumber";
import DisplayStars from "./DisplayStars";
import PlayAgain from "./PlayAgain";


const StarGame = (props) => {
    // Color Theme
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };

// Math science
    const utils = {
        // Sum an array
        sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

        // create an array of numbers between min and max (edges included)
        range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

        // pick a random number between min and max (edges included)
        random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

        // Given an array of numbers and a max...
        // Pick a random sum (< max) from the set of all available sums in arr
        randomSumIn: (arr, max) => {
            const sets = [[]];
            const sums = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0, len = sets.length; j < len; j++) {
                    const candidateSet = sets[j].concat(arr[i]);
                    const candidateSum = utils.sum(candidateSet);
                    if (candidateSum <= max) {
                        sets.push(candidateSet);
                        sums.push(candidateSum);
                    }
                }
            }
            return sums[utils.random(0, sums.length - 1)];
        },
    };

    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            // Clear the useEffect timeout
            return () => clearTimeout(timerId);
        }
    });


    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active"
    const numberStatus = number => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? "wrong" : 'candidate';
        }
        return 'available';
    }

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used' || gameStatus !== 'active') {
            return;
        }

        const newCandidateNums = currentStatus === 'available'
            ? candidateNums.concat(number)
            : candidateNums.filter(cn => cn !== number);
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        }
        else {
            const newAvailableNums = availableNums.filter(
                cn => !newCandidateNums.includes(cn)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== "active" ? (
                        <PlayAgain onClick={props.keyId} gameStatus={gameStatus} />) : (
                        <DisplayStars count={stars} utils={utils} />)
                    }
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <GameNumber
                            key={number}
                            status={numberStatus(number)}
                            colors={colors}
                            number={number}
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
}
export default StarGame;
