import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Review from '../Review/Review';

class Understanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            understanding: '',
        }
    }

    understandingRating = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            understanding: inputValue,
        })
    }

    clickAddUnderstanding = (event) => {
        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understanding
        });
        console.log('UNDERSTANDING working');
        // navigate to list
        this.props.history.push('/support');
}


    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Understanding"
                    onChange={this.understandingRating}
                />
                <button onClick={this.clickAddUnderstanding}>Next</button>
            <Review />
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Understanding);
