import axios from 'axios';

//base url for recipe api
export default axios.create({
    baseURL: 'www.themealdb.com/'
});