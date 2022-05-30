import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
    state = {favoriteColor: 'pink'}

    componentDidMount(){ //on creation
        setTimeout(() => {
            this.setState({favoriteColor: "green"})
          }, 1000);
    }

    componentDidUpdate() { //on update+6
        document.getElementById("div").innerHTML = "The updated favorite is " + this.state.favoriteColor;
    }

    render() {
        return (
        <div>
           <h1>My favorite color is {this.state.favoriteColor}</h1>
           <div id="div"></div>
        </div>
        );
    }

}

export default App;
