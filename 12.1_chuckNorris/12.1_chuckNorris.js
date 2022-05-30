import React, {Component} from 'react';
import axios from 'axios';
import LargeHeading from './LargeHeading'

export default class Chuck extends Component {
    state = {randomJoke:''};
    fetchJoke = async () => {
        try {
            const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
            console.log(data.value);
            return data.value;
        }
        catch (err) {
            console.error(err);
        }
    };

    handleRandomJoke = async () => {
        this.setState({ randomJoke: await this.fetchJoke() });
    };

    render() {
        return (
        <div>
             <button onClick={this.handleRandomJoke}>Get Random Joke</button>
             <LargeHeading text={this.state.randomJoke}/>
        </div>
        );
    }
}