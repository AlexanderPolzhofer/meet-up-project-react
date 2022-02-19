import React from 'react';

import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {

    const url = 'https://meetup-project-react-8d99a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';
    const navigate = useNavigate();

    const handleAddMeetup = (meetupData) => {

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                navigate('/');
            });
    }

    return (
        <div>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </div>
    );
}

export default NewMeetup;