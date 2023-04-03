import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ArticlesContainer.css'
import Articles from './Articles/Articles';
import Bookmark from './Bookmark/Bookmark';


const ArticlesContainer = () => {
    const [articles, setArticles] = useState([])
    const [time, setTime] = useState(0)
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    const readTimeCount = (duration) => {
        setTime(time + duration)
    }

    const notify = () => toast.warn('You Have Already Bookmarked This Blog', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const addBookmark = (title) => {
        if (bookmarks.includes(title)) {
            notify()
        }
        else
            setBookmarks([...bookmarks, title])
    }
    return (
        <div className='article_container'>
            <div>
                {
                    articles.map(article =>
                        <Articles article={article}
                            key={article.id}
                            readTimeCount={readTimeCount}
                            addBookmark={addBookmark}>
                        </Articles>)
                }
            </div>
            <div>
                <Bookmark time={time} bookmarks={bookmarks}></Bookmark>
            </div>
            <ToastContainer />

        </div>
    );
};

export default ArticlesContainer;