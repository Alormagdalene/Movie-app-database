import { useQuery } from "@tanstack/react-query";
import { API_BASE } from "../config/tmdbconfig";

function useMovieData(movieTitle) {
  // Check if movieTitle is valid before performing operations on it
  if (!movieTitle) {
    return [false, new Error("Movie title is missing."), null];
  }

  const movie = movieTitle.toLowerCase().replace(" ", "+");

  const { pending, error, data } = useQuery({
    queryKey: [movieTitle],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}&t=${movie}`);
      const data = await res.json();
      return data;
    },
  });

  return [pending, error, data];
}

export default useMovieData;
