import React from 'react';
import './Bookmark.css'

const Bookmark = ({ time, bookmarks }) => {
    return (
        <div className='bookmark'>
            <h3>Spent time on read : {time} min</h3>
            <div className='bookmarkAdd'>
                <h2 >Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <h3 key={bookmark.length}>{bookmark} </h3>)
                }
            </div>
        </div>
    );
};

export default Bookmark;