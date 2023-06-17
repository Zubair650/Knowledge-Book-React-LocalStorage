import React from 'react';
import './markedtime.css'
const Markedtime = ({times}) => {
    let read = 0;
    
    for(const time of times)
    {
        // if(isNaN(time.q))
        // {
        //     time.q = 1;
        // }
        read = read + (time.read * time.q);
    }
    return (
        <div className='time'>
             <p >Spent Time on read: <b>{read}</b> min</p>
        </div>
    );
};

export default Markedtime;