import axios from 'axios';


const KEY = 'AIzaSyCjcwci_O8GA62BIYittwew1aoaF3G6L0o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})