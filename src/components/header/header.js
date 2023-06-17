import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-book'>
            <div>
                <h1>Knowledge Book</h1>
            </div>
            <div>
                <img src="images/zubair.jpg" alt=""></img>
            </div>
           </div>
            <div >
                <hr style={{borderColor: 'rgba(17,17,17,0.15)'}}></hr>
            </div>
        </div>
    );
};

export default Header;