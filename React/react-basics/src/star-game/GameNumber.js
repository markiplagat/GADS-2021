import React from 'react';

const GameNumber = props => {
    return(
        <button 
            className="number" 
            onClick={() => props.onClick(props.number, props.status)}
            style={{backgroundColor: props.colors[props.status]}}
        >
         {props.number}
        </button>
    );
};
export default GameNumber;
