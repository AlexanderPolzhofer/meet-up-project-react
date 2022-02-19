import React from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem({ ...props }) {

    const { meetup } = props;

    const { title, address, description, image } = meetup;

    return (
        <Card>
            <li className={classes.item}>
                <div>
                    <img src={image} alt='logo' className={classes.image} />
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
        </Card>

    );
}

export default MeetupItem;