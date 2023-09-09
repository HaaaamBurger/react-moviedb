import axios from "axios";
import {baseURL} from "../constants/urls";


const apiService = axios.create({
    baseURL,
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdjN2NhNTZmNDg1OGFkMzMzZGExMzFkOGIwNzk2MiIsInN1YiI6IjY0YmU4OGI3MGVkMmFiMDBlMmRiNmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5hagmebzWdbalXyNHDJ32ZpaWTo9PrwxhrnaUPpV10'
    }
});


export {
    apiService
}