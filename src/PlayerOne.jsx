import React from 'react'

class PlayerOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return(
            <div className="player" style={{borderWidth: 1, borderStyle: 'Solid', margin: 5}}>
                <b>Player One</b>
                <div>Name: {this.props.name}</div>
                <div>Played number of times: </div>
                <button>Play</button>
            </div>
        );
    }
}

export default PlayerOne