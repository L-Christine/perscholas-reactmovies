const MovieDisplay = (props) => {
    const {movie} = props;
    console.log(movie)
    const loaded = () => {
        return(
            <div>
                <h1>Display Movie</h1>
                {/* Title */}
                <h2>{movie.Title}</h2>
                {/* Genre */}
                <h2>{movie.Genre}</h2>
                {/* Poster image */}
                <img src={movie.Poster} alt={movie.Title}/>            
                {/* Year */}
                {movie.Year}
                
            </div>
        )
    }
    //Function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>
    }
    
    //Ternary Operator: determine which fx will be returned
    return movie ? loaded() : loading()
}

export default MovieDisplay;