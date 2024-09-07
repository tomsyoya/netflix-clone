import { useEffect, useState } from "react";
import axios from "../../axios";

export type Movie = {
    id: string;
    name: string;
    postar_path: string;
    backdrop_path: string;
}

export const useProps = (fetchUrl: string) => { 
    const [movies, setMovies] = useState<Movie[]>([]);

    // 非同期で映画データを取得
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            const movies = request.data.results.map((movie: Movie) => ({
                id: movie.id,
                name: movie.name,
                postar_path: movie.postar_path,
                backdrop_path: movie.backdrop_path,
            }));
            setMovies(movies);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    return { movies };
}