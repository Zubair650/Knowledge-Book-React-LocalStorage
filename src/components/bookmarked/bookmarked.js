import React from 'react';
import './bookmarked.css';
const Bookmarked = ({ bookmarks }) => {

    let quantity = 0;
    for (const bookmark of bookmarks) {
        // if (bookmark.quantity === 0) {
        //     bookmark.quantity = 1;
        // }
        // bookmark.quantity = bookmark.quantity || 1;
        quantity = quantity + bookmark.quantity;
    }
    return (

        <div className='bookmarks-time'>

            <p className='bookmarks'>Bookmarked Blogs: <b>{quantity}</b></p>
            {
                bookmarks.map(bookmark =>
                    <p className='bookmarked-titles' key={bookmark.id}>{bookmark.title}</p>
                )
            }

        </div>

    );
};

export default Bookmarked;