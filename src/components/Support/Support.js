import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Support extends Component {
    constructor(props) {
        super(props);

        this.state = {
            support: '',
        }
    }

    supportRating = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            support: inputValue,
        })
    }

    clickAddSupport = (event) => {
        this.props.dispatch({
            type: 'SUPPORT',
            payload: this.state.support
        });
        console.log('SUPPORT working');
        // navigate to list
        this.props.history.push('/comments');
}


    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Support"
                    onChange={this.supportRating}
                />
                <button onClick={this.clickAddSupport}>Next</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Support);