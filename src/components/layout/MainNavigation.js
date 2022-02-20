import React, { useContext } from 'react';

import classes from './MainNavigation.module.css';

import { Link } from 'react-router-dom';

import FavoriteContext from '../../store/Favorites-context';

function MainNavigation() {

    const favoritesCtx = useContext(FavoriteContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/newMeetup' >New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites' >Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default MainNavigation;