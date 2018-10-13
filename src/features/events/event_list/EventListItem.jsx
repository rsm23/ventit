import React, {Component} from 'react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
    render() {
        const {event} = this.props;

        return (
            <div className="font-sans">
                <div
                    className="bg-white w-full mx-auto mb-10 border md:rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-wrap no-underline text-black overflow-hidden p-3">
                        <div className="w-16">
                            <img className="pr-px w-full h-full rounded-full"
                                 src={event.hostPhotoURL} alt=""
                                 style={{objectFit: 'cover'}}/>
                        </div>
                        <div className="ml-3">
                            <p className="text-4xl">{event.title}</p>
                            <p className="text-sm">Hosted by <span className="text-blue-dark">{event.hostedBy}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex p-3 border-t border-b sm:justify-around">
                        <div
                            className="font-bold text-grey-darkest flex items-center my-1 pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="mr-1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            {event.date}
                        </div>

                        <div className="font-bold text-grey-darkest flex items-center my-1 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="mr-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {event.city}
                        </div>
                    </div>
                    <div className="flex p-3 py-4 border-b bg-grey-lighter justify-center">
                        {event.attendees.map((attendee)=> (
                            <EventListAttendee key={attendee.id} attendee={attendee}/>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <p className="p-4 text-grey-darkest w-full">
                            {event.description}
                        </p>
                        <div className="border-t border-l border-grey-lighter text-sm flex">
                            <a href="#"
                               className="flex no-underline text-blue px-4 py-2 justify-center items-center font-bold hover:bg-grey-lighter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round"
                                     className="mr-2">
                                    <path
                                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                                </svg>
                                <span>View</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventListItem;