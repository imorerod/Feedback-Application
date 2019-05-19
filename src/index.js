import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import storeInstance from './modules/store/store';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const feelingReducer = (state = [], action) => {
    if (action.type === 'FEELING') {
        return action.payload;
    } 
    return state;

}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));