import React from 'react';

const DisplayStars = props => (
    <>
        {props.utils.range(1, props.count).map(starId =>
            <div key={starId} className="star" />
        )}
    </>
);
export default DisplayStars;
