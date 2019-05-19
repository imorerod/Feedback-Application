import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import axios from 'axios';

class Review extends Component {

    render() {
        return (
            <div>
              <h2>Review Your Feedback</h2>
            <p>Feeling: {this.props.reduxState.feelingReducer}</p>
            <p>Understanding: {this.props.reduxState.understandingReducer}</p>
            <p>Support: {this.props.reduxState.supportReducer}</p>
            <p>Comments: {this.props.reduxState.commentsReducer}</p>
          </div>
        );
      }
}

export default connect(mapReduxStateToProps)(Review);