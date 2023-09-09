import React, {useEffect, useState} from 'react';
import {filmsServices} from "../services/filmsServices";


const MoviesPage = () => {
    const [films, setFilms] = useState()
    useEffect(() => {
        filmsServices.getMovies().then(({data}) => setFilms(data))
    }, []);

    console.log(films)

    return (
        <div>
            MoviesPage
        </div>
    );
};

export {
    MoviesPage,
};