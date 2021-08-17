import React, {useState} from 'react';
import StarGame from "./StarGame";

const Game = () => {
    const [keyId, setKeyId] = useState(1);
    return(
        <StarGame key={keyId} keyId = {() => setKeyId(keyId + 1)} />
    );
};
export default Game;