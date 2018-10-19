import React, {Component} from 'react'
import cuid from 'cuid'
import EventList from '../event_list/EventList'
import EventForm from "../event_form/EventForm"

const eventsDashboard = [
    {
        id: '1',
        title: 'Parc de la Tête d\'or',
        date: '2018-09-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'Lyon, France',
        venue: "Parc de la Tête d'or, 69006 Lyon, France",
        hostedBy: 'Seif',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/54.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Place Bellecour',
        date: '2018-09-28',
        category: 'Shopping',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'Lyon, France',
        venue: 'Place Bellecour, 69002 Lyon, France',
        hostedBy: 'Seif',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/4.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/9.jpg'
            }
        ]
    }
];

class EventDashboard extends Component {
    state = {
        events: eventsDashboard,
        open: false,
        selectedEvent: null
    };

    toggleForm = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleCancel = () => {
        this.setState({
            selectedEvent: null
        });
    };

    handleUpdateEvent = (updatedEvent) => {
        this.setState({
            event: this.state.events.map(event => {
                if (event.id === updatedEvent.id) {
                    return Object.assign({}, updatedEvent)
                } else {
                    return event;
                }
            }),
            selectedEvent: null,
            open: false
        })
    };

    handleOpenEvent = (eventToOpen) => (e) => {
        e.preventDefault();
        this.setState({
            selectedEvent: eventToOpen,
            open: true
        })
    };

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/images/user.png';

        const updatedEvents = [...this.state.events, newEvent];
        this.setState({
            events: updatedEvents,
            open: false
        })
    };

    handleDeleteEvent = (eventId) => (e) => {
        e.preventDefault();
        const updatedEvents = this.state.events.filter(e => e.id !== eventId);
        this.setState({
            events: updatedEvents
        })
    };

    render() {
        const {open, selectedEvent} = this.state;
        return (
            <div className="flex flex-wrap -mx-3">
                <div className="sm:w-full md:w-2/3 mt-8 md:px-3">
                    <EventList deleteEvents={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent}
                               events={this.state.events}/>
                </div>

                <div className="sm:w-full md:w-1/3 mt-8 md:px-3">
                    <button
                        className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 mb-6 border border-grey-light rounded shadow"
                        onClick={this.toggleForm}>
                        {(open) ? 'Close Form' : 'Create Event'}
                    </button>
                    {open && <EventForm createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}
                                        selectedEvent={selectedEvent}
                                        updateEvent={this.handleUpdateEvent}/>}
                </div>
            </div>
        )
    }
}

export default EventDashboard;