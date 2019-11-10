import React from 'react'

class PlayerOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }

        this.setTextForButton = this.setTextForButton.bind(this);
    }

    setTextForButton() {
        if(this.props.active == 1) {
            return this.props.textPlay;
        }
        else {
            return this.props.textPlayingNow;
        }
    }

    render() {
        return(
            <div className="player" style={{borderWidth: 1, borderStyle: 'Solid', margin: 5}}>
                <b>Player One</b>
                <div>Name: {this.props.name}</div>
                <div>Played number of times: {this.props.playedTimes}</div>
                <button disabled={this.props.active != 1} onClick={(event) => this.props.buttonHandler(event, 1)}>{this.setTextForButton()}</button>
            </div>
        );
    }
}

export default PlayerOne