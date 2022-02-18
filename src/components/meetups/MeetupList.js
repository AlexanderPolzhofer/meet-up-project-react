import React from 'react';
import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

function MeetupList({ ...props }) {

    const { meetups } = props;
    return (
        <ul className={classes.list}>
            {meetups.map(meetup => <MeetupItem
               meetup={meetup} key={meetup.id}
            />)}
        </ul>
    );
}

export default MeetupList;