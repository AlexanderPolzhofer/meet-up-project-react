import React from 'react';

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
        title: 'This is the first meetup',
        address: 'Via Toscana 123 (I)',
        imageUrl: 'https://data.puzzle.at/.8/toskana-italien-1000-teile--puzzle.62429-1.fs.jpg',
        description: 'It is a beautiful place for a meetup. You should not miss it. It is definitly valuable!'
    }
];

function AllMeetups() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DATA.map(meetup => {
                    return <li key={meetup.id}>{meetup.title} <img src={meetup.imageUrl} alt='logo' width={'25%'} height={'25%'} /></li>
                })}
            </ul>
        </section>
    );
}

export default AllMeetups;