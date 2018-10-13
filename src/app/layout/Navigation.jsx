import React, {Component} from 'react';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return <div className="font-sans antialiased">
            <nav className="flex items-center justify-between flex-wrap bg-teal px-6 py-2">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  Vent-it
                </span>
                </div>
                <div className="block sm:hidden">
                    <button onClick={this.toggleMenu}
                            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full flex-grow sm:flex sm:items-center sm:w-auto ${this.state.open ? "block" : "hidden"}`}>
                    <div className="text-sm sm:flex-grow">
                        <a href="#responsive-header"
                           className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header"
                           className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header"
                           className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        <a href="/"
                           className="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 mr-3 sm:mt-0">
                            Login
                        </a>
                        <a href="/"
                           className="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">
                            Register
                        </a>
                    </div>
                </div>
            </nav>
        </div>;
    }
}

export default Navigation;
