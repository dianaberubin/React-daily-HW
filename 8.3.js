import { render } from '@testing-library/react';
import React from 'react';
import Box from './Box_8.3.js';

class App extends React.Component {
    state = {Box_color: '', Box_shape: ''};

    componentDidMount(){ //on creation
        const colors = ['blue', 'yellow', 'red', 'green', 'black'];
        let i = -1;
        setInterval(() => {
          if (i > 3) {
            i = 0;
          } else {
            i++;
          }
          this.setState({Box_color: colors[i]})
        }, 500);
    }

    componentDidUpdate() { //on update
    //box dissapear after 4 sec
    setTimeout(() => {
        this.setState({Box_shape: '50%'})
      }, 2500);
    }

    render() {
        console.log(this.state.Box_color);
        return (
            <div>
            <Box Box_color={this.state.Box_color} Box_shape={this.state.Box_shape} />
            </div>
        );
    }

}

export default App;
