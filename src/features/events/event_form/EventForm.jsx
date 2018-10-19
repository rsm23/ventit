import React, {Component} from 'react';


const emptyEvent = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
};

class EventForm extends Component {
    state = {
        event: emptyEvent
    };
    
    componentDidMount() {
        if (this.props.selectedEvent) {
            this.setState({
                event : this.props.selectedEvent
            })
        } 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedEvent !== this.props.selectedEvent){
            this.setState({
                event : nextProps.selectedEvent || emptyEvent
            })
        } 
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.event.id) {
            this.props.updateEvent(this.state.event)
        } else {
            this.props.createEvent(this.state.event);
        }
    };
    onInputChange = (e) => {
        let newEvent = this.state.event;
        newEvent[e.target.name] = e.target.value;
        this.setState({
            event: newEvent
        })
    };

    render() {
        const {handleCancel} = this.props;
        const {event} = this.state;
        return (
            <div className="w-full">
                <form className="bg-white shadow-md rounded p-6 border" onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Event Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="title" name="title" type="text" placeholder="Event Title" onChange={this.onInputChange}
                            value={event.title}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Event Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" name="date" value={event.date} onChange={this.onInputChange}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="city" name="city" type="text" placeholder="City" value={event.city}
                            onChange={this.onInputChange}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Venue
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="venue" name="venue" type="text" placeholder="123 venue of streets"
                            onChange={this.onInputChange} value={event.venue}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Hosted by
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="hostedBy" name="hostedBy" type="text" placeholder="John Doe"
                            onChange={this.onInputChange} value={event.hostedBy}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit
                        </button>
                        <button
                            className="bg-grey hover:bg-grey-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="reset"
                            onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EventForm;