import { API_BASE } from "../config/tmdbconfig";
import { useQuery } from "@tanstack/react-query";

function useSearchMovie(movieTitle) {
  const movie = movieTitle ? movieTitle.toLowerCase().replace(/\s+/g, "+") : "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchMovie", movieTitle],
    queryFn: async () => {
      if (!movie) return null;
      const res = await fetch(`${API_BASE}&s=${movie}`);
      const data = await res.json();
     
      return data;
    },
    enabled: !!movie, // Only run the query when movieTitle is provided
  });

  return { isLoading, error, data }; // Return proper flags and data
};

export default useSearchMovie;
