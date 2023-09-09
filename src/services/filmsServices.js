import {apiService} from "./apiService";
import {urls} from "../constants";

const filmsServices = {
    getMovies: () => apiService.get(urls.movies)
}

export {
    filmsServices
}