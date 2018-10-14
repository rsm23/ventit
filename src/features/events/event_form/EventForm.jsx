import React, {Component} from 'react';

class EventForm extends Component {
    render() {
        return (
            <div className="w-full">
                <form className="bg-white shadow-md rounded p-6 border">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Event Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="title" name="title" type="text" placeholder="Event Title"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Event Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" name="date"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="city" name="city" type="text" placeholder="City"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Venue
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="venue" name="venue" type="text" placeholder="123 venue of streets"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Hosted by
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            id="user" name="user" type="text" placeholder="John Doe"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit
                        </button>
                        <button
                            className="bg-grey hover:bg-grey-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="reset">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EventForm;