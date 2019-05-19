import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import storeInstance from './modules/store/store';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const feelingReducer = (state = '', action) => {
    if (action.type === 'FEELING') {
        return action.payload;
    } 
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload;
    } 
    return state;
}

const supportReducer = (state = '', action) => {
    if (action.type === 'SUPPORT') {
        return action.payload;
    } 
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'COMMENT') {
        return action.payload;
    } 
    return state;
}

const reviewReducer = (state = '', action) => {
    if (action.type === 'REVIEW') {
        return action.payload;
    } 
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        reviewReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));