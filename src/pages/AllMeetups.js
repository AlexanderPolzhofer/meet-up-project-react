import React, { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    const url = 'https://meetup-project-react-8d99a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups)
            })
    }, []);

    return (
        <section>
            <h1>All Meetups</h1>
            {isLoading ? '...loading' : <MeetupList meetups={loadedMeetups} />}

        </section>
    );
}

export default AllMeetups;