import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e3f386dfeac1290502748b839af213fe020ee436ebec1a84282baeffb82f1242'
    }
});