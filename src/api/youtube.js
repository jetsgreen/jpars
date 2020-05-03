import axios from 'axios';

export default axios.create({
    baseURL:'https//www.googleapis.com/youtube/v3',
 
})
// import axios from "axios";

// const BASEURL = "https//www.googleapis.com/youtube/v3";
// const APIKEY = "AIzaSyAmDKuFgCXdea2kPgyZlO3hWWDzVE0-Z0olimit=5";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };