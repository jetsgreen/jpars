import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/movie?query=";
const APIKEY = "&api_key=49b710a3c471c03d36cd3dacb26281dc";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
    
  }
};