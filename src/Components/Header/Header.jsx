import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <h2>Assignment cafe</h2>
            <h3 onClick={() => window.location.href = 'blog.html'} > <FontAwesomeIcon icon={faBookJournalWhills} /> Answer of four questions</h3>
        </div>
    );
};

export default Header;