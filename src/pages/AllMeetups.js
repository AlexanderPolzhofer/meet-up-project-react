import React from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DATA = [
    {
        id: 'm1',
        title: 'This is the first meetup',
        address: 'Via Toscana 123 (I)',
        imageUrl: 'https://data.puzzle.at/.8/toskana-italien-1000-teile--puzzle.62429-1.fs.jpg',
        description: 'It is a beautiful place for a meetup. You should not miss it. It is definitly valuable!'
    },
    {
        id: 'm2',
        title: 'This is the second meetup',
        address: 'Via Toscana 123 (I)',
        imageUrl: 'https://data.puzzle.at/.8/toskana-italien-1000-teile--puzzle.62429-1.fs.jpg',
        description: 'It is a beautiful place for a meetup. You should not miss it. It is definitly valuable!'
    }
];

function AllMeetups() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DATA} />
        </section>
    );
}

export default AllMeetups;