import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type";
import { requests } from "../../request";

export const useProps = (fetchUrl: string) => { 
    const [movies, setMovies] = useState<Movie[]>([]);

    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

    // 非同期で映画データを取得
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            const movies = request.data.results.map((movie: Movie) => ({
                id: movie.id,
                name: movie.name,
                poster_path: movie.poster_path,
                backdrop_path: movie.backdrop_path,
            }));
            setMovies(movies);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie: Movie) => { 
        if (trailerUrl) {
            setTrailerUrl("null");
        } else {
            const moviePlayUrl = await axios.get(requests.fetchMovieVideos(Number(movie.id)));
            setTrailerUrl(moviePlayUrl.data.results[0]?.key);
        }
    };

    return {
        movies,
        trailerUrl,
        handleClick,
    };
}