import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'


class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <PlayerOne name="one" />
                <PlayerTwo name="two" />
                <p>Set name of Player One: <input name="inputOne" /></p>
                <p>Set name of Player Two: <input name="inputTwo" /></p>
            </div>
        );
    }
}

export default GameAdmin