import { render } from '@testing-library/react';
import React from 'react';
import Box from './Box_8.2.js';

class App extends React.Component {
    state = {Box_show: false};

    componentDidMount(){ //on creation
     //box slidex after 1 sec
     setTimeout(() => {
        this.setState({Box_show: true})
      }, 1000); 
    }

    componentDidUpdate() { //on update
    //box dissapear after 4 sec
    setTimeout(() => {
        this.setState({Box_show: false})
      }, 4000);    
    }

    render() {
        return (
            this.state.Box_show ? 
            <div>
            <Box width='100px' background='purple' />
            <Box width='200px' background='purple' />
            <Box width='150px' background='purple' />
            </div> : null
        );
    }

}

export default App;
