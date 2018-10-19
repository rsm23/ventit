import React, {Component} from 'react';
import EventListItem from "./EventListItem";

class EventList extends Component {

    render() {
        const {events, onEventOpen, deleteEvents} = this.props;

        return (
            <div>
                <h1 className="mb-6">Events</h1>
                {events.slice(0).reverse().map((event) => (
                    <EventListItem key={event.id} event={event} onEventOpen={onEventOpen} deleteEvent={deleteEvents}/>
                ))}
            </div>
        )
    }
}

export default EventList;