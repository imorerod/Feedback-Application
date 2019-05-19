import axios from 'axios';

const getFeedback = () => {
    return axios({
        method: 'GET',
        url: '/feedback'
        })
    }

export {
    getFeedback
}