import React from 'react';
import Movie from './Movie'
import TvSerie from './TvSerie';
import { Route, Switch } from "react-router-dom";
import MovieDetails from './MovieDetails';
import TvDetails from './TvDetails'
const Result = (props) => {
    const movies = props.data.movies.map((movie, index) => <Movie key={movie.id} img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} title={movie.title} release={movie.release_date} id={movie.id} getId={props.getMovieId} />)

    const tvSeries = props.data.tvSeries.map((tv, index) => <TvSerie key={tv.id} img={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} title={tv.name} release={tv.first_air_date} id={tv.id} getId={props.getTvId} />)

    const Movies = () => <div>
        <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.bgcM}')` }}></div>
        <h1>Trending Now</h1>
        <div className="results">
            {movies}</div>
    </div>
    const TvSeries = () => <div>
        <div className="bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.bgcT}')` }}></div>
        <h1>Trending Now</h1>
        <div className="results">{tvSeries}</div>
    </div>

    return (

        <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/tvSeries" component={TvSeries} />
            <Route path='/movie/:id' component={MovieDetails} />
            <Route path='/tv/:id' component={TvDetails} />
        </Switch>

    );
}

export default Result;