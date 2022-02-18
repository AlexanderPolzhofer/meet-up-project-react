import React from 'react';

import classes from './MeetupItem.module.css';

function MeetupItem({ ...props }) {

    const { meetup } = props;

    const { title, address, description, imageUrl } = meetup;


    return (
        <li className={classes.item}>
            <div>
                <img src={imageUrl} alt='logo' className={classes.image} />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={classes.actions}>
                <button>Add to Favorites</button>
            </div>
        </li>
    );
}

export default MeetupItem;