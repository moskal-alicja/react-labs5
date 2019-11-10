import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'


class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: "one", 
            playerTwoName: "two",
        }
        this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged(event, player) {
        if(player == 1) {
            this.setState({playerOneName: event.target.value})
        }
        else {
            this.setState({playerTwoName: event.target.value})
        }
    }

    render() {
        return(
            <div>
                <PlayerOne name={this.state.playerOneName} />
                <PlayerTwo name={this.state.playerTwoName}  />
                <p>Set name of Player One: <input name="inputOne" onChange={(event) => this.nameChanged(event, 1)} /></p>
                <p>Set name of Player Two: <input name="inputTwo" onChange={(event) => this.nameChanged(event, 2)} /></p>
            </div>
        );
    }
}

export default GameAdmin