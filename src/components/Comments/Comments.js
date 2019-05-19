import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

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
        console.log('COMMENTS working');
        console.log(this.state.comment);
        // navigate to list
        this.props.history.push('/confirmation');
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
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Comments);