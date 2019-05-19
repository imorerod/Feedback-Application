import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'

class Confirmation extends Component {

    startOver = (event) =>{
        this.props.history.push('/feeling')
    }

    render(){
        return (
            <div>
                <h2>Feedback Submitted</h2>
                <button onClick={this.startOver}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Confirmation);