import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () =>{

//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return (
//         <div className="text">
//             Hi React!
//         </div>
//     );
// }


class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };        
    // }

    // or

    state = { lat: null, errorMessage : ''};


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        } else {
            return <Spinner message = "Please accept location request" />
        }
    }

    // react says we have to define  render method . If we don't do so react is going to throw an error.
    render() {
        return <div className = "border red">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));