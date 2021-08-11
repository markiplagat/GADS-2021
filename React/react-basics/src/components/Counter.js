import React, {useState} from 'react';
import Display from "./Display";

const Counter = () => {
    const [count, setCount] = useState(5);

    const handleClick=()=>{
        setCount(count * 2);
    }


    return(
        <div>
            <h1>Click on the Button to increment the value</h1>
            <button onClick={handleClick}>Increment</button>
            <Display message={count} />
        </div>
    )
}
export default Counter;
