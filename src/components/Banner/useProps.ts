import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request";
import { Movie } from "../../type";

export const useProps = () => { 
    const [movie, setMovie] = useState<Movie>();

    // 非同期で映画データを取得
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // resultsの中に入っている映画データからランダムに1つを取得
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        };
        fetchData();
    }, []);

    // 映画の説明文を任意の文字数で切り捨てる関数
    const truncate = (str: string | undefined, n: number): string => { 
        if (!str) return "";
        return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    };

    return { movie, truncate };
}