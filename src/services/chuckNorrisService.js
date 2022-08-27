import axios from 'axios';

export default function getRandomJoke() {
    return axios.get('https://api.chucknorris.io/jokes/random', {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}