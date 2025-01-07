import { useState, useEffect } from "react";

const useSearchMovie = (query) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setPending(true);
      setError(null);

      try {
        const searchResponse = await fetch(`http://www.omdbapi.com/?apikey=e3f51ce2&s=${query}`);
        const searchData = await searchResponse.json();

        if (searchData.Search) {
          const detailedMovies = await Promise.all(
            searchData.Search.map(async (movie) => {
              const detailsResponse = await fetch(`http://www.omdbapi.com/?apikey=e3f51ce2&i=${movie.imdbID}`);
              return await detailsResponse.json();
            })
          );
          setData(detailedMovies);
        } else {
          setData([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setPending(false);
      }
    };

    fetchMovies();
  }, [query]);

  return [pending, error, data];
};

export default useSearchMovie;
