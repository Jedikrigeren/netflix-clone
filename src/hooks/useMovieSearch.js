import { useAsync } from "react-use";

export function useMovieSearch(searchQuery) {
  const url = searchQuery === "" ? "http://www.omdbapi.com/?s=''&apikey=1983e247" : `http://www.omdbapi.com/?s=${searchQuery}&apikey=1983e247`;
  const result = useAsync(async () => {
    // TODO: Mere avanceret library fremfor async "swr" State While Refetching
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }, [url]); // QUESTION: Var det det her der gjorde at den først renderede det hele når man var færdig med objektet, eller hvad var det den gjorde?

  return { loading: result.loading, error: result.error, data: result.value?.Search };
}
