import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { postFeedback } from '../../modules/services/feedback.service';

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
            clear: {},
        }
    }

    addReviewToDatabase = (event) => {
        postFeedback(this.props.reduxState.feelingReducer,
            this.props.reduxState.understandingReducer,
            this.props.reduxState.supportReducer,
            this.props.reduxState.commentsReducer,
            this.props.reduxState.reviewReducer)
            .then((response) => {
                this.props.dispatch({
                    type: 'REVIEW',
                    payload: this.state.review
                })
                this.props.history.push('/confirmation');
            })
    }

    render() {
        let disableButton = true;

        if( this.props.reduxState.feelingReducer &&
            this.props.reduxState.understandingReducer &&
            this.props.reduxState.supportReducer &&
            this.props.reduxState.commentsReducer) {
            disableButton = false;
        }
        return (
            <div className="box">
                <div className="content">
                    <h3>Review Your Feedback</h3>
                    <p>Feeling: {this.props.reduxState.feelingReducer}</p>
                    <p>Understanding: {this.props.reduxState.understandingReducer}</p>
                    <p>Support: {this.props.reduxState.supportReducer}</p>
                    <p>Comments: {this.props.reduxState.commentsReducer}</p>
                </div>
                <button disabled={disableButton} onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);