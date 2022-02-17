import React from 'react';
import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

function MeetupList({ ...props }) {

    const { meetups } = props;
    return (
        <ul className={classes.list}>
            {meetups.map(meetup => <MeetupItem
                key={meetup.id}
                title={meetup.title}
                imageUrl={meetup.imageUrl}
                description={meetup.description}
                address={meetup.address}
            />)}
        </ul>
    );
}

export default MeetupList;