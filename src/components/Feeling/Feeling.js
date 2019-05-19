import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Feeling extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feeling: '',
        }
    }

    changeRating = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            feeling: inputValue,
        })
    }

    clickAddFeeling = (event) => {
        this.props.dispatch({
            type: 'FEELING',
            payload: this.state.feeling
        });
        // navigate to list
        this.props.history.push('/understanding');
}


    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Feeling"
                    onChange={this.changeRating}
                />
                <button onClick={this.clickAddFeeling}>Next</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);
