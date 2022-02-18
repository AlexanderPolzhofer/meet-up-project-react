import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetup() {

    const url = 'https://meetup-project-react-8d99a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

    const handleAddMeetup = (meetupData) => {

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <div>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </div>
    );
}

export default NewMeetup;