import { useQuery } from "@tanstack/react-query";
import { API_BASE } from "../config/tmdbconfig";


function useMovieData (movieTitle) {
    const movie = movieTitle.toLowerCase().replace(" ", "+");
   
    const {pending, error, data} = useQuery({
        queryKey: [movieTitle],
        queryFn: async () => { 
        const res = await fetch(`${API_BASE}&t=${movie}`);
        const data = await  res.json();
       
        return data;
        },
    });
   
    return [pending, error, data];
};



export default useMovieData;
