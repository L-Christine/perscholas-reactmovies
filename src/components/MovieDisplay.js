const MovieDisplay = (props) => {
    const {movie} = props;
    console.log(movie)
        return(
            <div>
                {/* Title !T is capital*/}
                <h2>{movie.Title}</h2>
                {/* Genre */}
                <h2>{movie.Genre}</h2>
                {/* Poster image */}
                <img src={movie.Poster} alt={movie.Title}/>            
                {/* Year */}
                <h2>{movie.Year}</h2>
                
            </div>
        )

}

export default MovieDisplay;