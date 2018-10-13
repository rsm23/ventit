import React, {Component} from 'react';

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
            <img src={attendee.photoURL} alt={attendee.name}
                 className="w-16 h-16 rounded-full -m-2 border-4 border-grey-lighter"/>
        );
    }
}

export default EventListAttendee;