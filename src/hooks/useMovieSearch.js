import { useAsync } from "react-use";

export function useMovieSearch(searchQuery) {
  const url = searchQuery === "" ? "http://www.omdbapi.com/?s=''&apikey=1983e247" : `http://www.omdbapi.com/?s=${searchQuery}&apikey=1983e247`;
  let result = useAsync(async () => {
    // TODO: Mere avanceret library fremfor async "swr" State While Refetching
    const response = await fetch(url);
    const result = await response.json();
    //console.log(result);
    return result;
  }, [url]);
  //console.log(result);
  return { loading: result.loading, error: result.error, data: result.value?.Search };
}
