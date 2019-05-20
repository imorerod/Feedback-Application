import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Review from '../Review/Review';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
        }
    }

    changeComment = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            comment: inputValue,
        })
    }

    clickAddComment = (event) => {
        this.props.dispatch({
            type: 'COMMENT',
            payload: this.state.comment
        });
        this.props.history.push('/review');
}


    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Comment"
                    onChange={this.changeComment}
                />
                <button onClick={this.clickAddComment}>Next</button>
            <Review />
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Comments);