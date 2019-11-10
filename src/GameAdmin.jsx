import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'


class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: "one", 
            playerTwoName: "two",
            activePlayer: 1,
        }
        this.nameChanged = this.nameChanged.bind(this);
        this.playerClicked = this.playerClicked.bind(this);

        this.textPlayingNow = "This user is playing now";
        this.textPlay = "Play";
    }

    nameChanged(event, player) {
        if(player == 1) {
            this.setState({playerOneName: event.target.value})
        }
        else {
            this.setState({playerTwoName: event.target.value})
        }
    }

    playerClicked = (event, player) => {
        if(player == 1) {
            this.setState({
                activePlayer: 2,           
            })
        }
        else {
            this.setState({
                activePlayer: 1,           
            })
        }
    }

    render() {
        return(
            <div>
                <PlayerOne 
                    name={this.state.playerOneName} 
                    active={this.state.activePlayer}
                    textPlayingNow={this.textPlayingNow} 
                    textPlay={this.textPlay}
                    buttonHandler={this.playerClicked}
                />
                <PlayerTwo 
                    name={this.state.playerTwoName}  
                    active={this.state.activePlayer}
                    textPlayingNow={this.textPlayingNow}
                    textPlay={this.textPlay}
                    buttonHandler={this.playerClicked}
                />
                <p>Set name of Player One: <input name="inputOne" onChange={(event) => this.nameChanged(event, 1)} /></p>
                <p>Set name of Player Two: <input name="inputTwo" onChange={(event) => this.nameChanged(event, 2)} /></p>
            </div>
        );
    }
}

export default GameAdmin