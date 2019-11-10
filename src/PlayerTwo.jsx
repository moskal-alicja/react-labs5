import React from 'react'

class PlayerTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }

    }

    render() {
        return(
            <div className="player" style={{borderWidth: 1, borderStyle: 'Solid', margin: 5}}>
                <b>Player Two</b>
                <div>Name: {this.state.name}</div>
                <div>Played number of times: </div>
                <button>This user is playing now</button>

            </div>
        );
    }
}

export default PlayerTwo