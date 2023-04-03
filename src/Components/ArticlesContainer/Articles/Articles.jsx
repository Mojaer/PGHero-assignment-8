import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import './Articles.css'

const Articles = (props) => {
    const readTimeCount = props.readTimeCount
    const addBookmark = props.addBookmark
    const { author, date, duration, img, pro_pic, title } = props.article
    return (
        <div className='article'>
            <img src={img} alt="image" />
            <section className='Article_section'>
                <div>
                    <div className='profile'>
                        <img src={pro_pic} alt="" />
                        <div>
                            <h3>{author}</h3>
                            <p>{date}</p>
                        </div>
                    </div>
                    <h1>{title}</h1>
                    <p># beginners # programming</p>
                    <button onClick={() => { readTimeCount(duration) }}>Mark as read</button>
                </div>
                <p> {duration} min read <FontAwesomeIcon className='bookmark-btn' onClick={() => addBookmark(title)} icon={faBookReader} />
                </p>
            </section>
        </div>
    );
};

export default Articles;