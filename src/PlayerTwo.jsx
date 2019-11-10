import React from 'react'

class PlayerTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }

        this.setTextForButton = this.setTextForButton.bind(this);
    }

    setTextForButton() {
        if(this.props.active == 2) {
            return this.props.textPlay;
        }
        else {
            return this.props.textPlayingNow;
        }
    }

    render() {
        return(
            <div className="player" style={{borderWidth: 1, borderStyle: 'Solid', margin: 5}}>
                <b>Player Two</b>
                <div>Name: {this.props.name}</div>
                <div>Played number of times: {this.props.playedTimes}</div>
                <button disabled={this.props.active != 2} onClick={(event) => this.props.buttonHandler(event, 2)}>{this.setTextForButton()}</button>
            </div>
        );
    }
}

export default PlayerTwo