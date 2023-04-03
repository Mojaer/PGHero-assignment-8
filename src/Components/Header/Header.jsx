import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <h2>Assignment cafe</h2>
            <h3  > <FontAwesomeIcon icon={faBookJournalWhills} /> <a href='blog.html' target='_blank'>Answer of four questions</a></h3>
        </div>
    );
};

export default Header;