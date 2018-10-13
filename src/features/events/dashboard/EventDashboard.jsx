import React, {Component} from 'react'
import EventList from '../event_list/EventList'
import EventForm from "../event_form/EventForm";

const events = [
    {
        id: '1',
        title: 'Parc de la Tête d\'or',
        date: '2018-09-27T11:00:00+00:00',
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
        date: '2018-09-28T14:00:00+00:00',
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
]
class EventDashboard extends Component {
    render() {
        return (
            <div className="flex flex-wrap -mx-3">
                <div className="sm:w-full md:w-2/3 my-8 px-3">
                    <EventList events={events}/>
                </div>

                <div className="sm:w-full md:w-1/3 my-8 px-3">
                    <EventForm/>
                </div>
            </div>
        )
    }
}

export default EventDashboard;