import { useEffect, useState } from "react";
import ApiService from "../../Services/ApiService";
import HttpService from "../../Services/HttpService";
import Detail from "../../Services/Detail";

const UseFetchApi = (endpoint) => {
  const [data, setData] = useState({});
  const [linkPath, setLinkPath] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [description, setDescription] = useState();
  const [movieTrending, setMovieTrending] = useState([]);
  const onFetchHandle = async () => {
    setLoading("Loading ...");

    try {
      const linkPath = await HttpService.linkPath();
      await setLinkPath(linkPath);
      const data = await ApiService.getJson();
      const dataMovie = await data;
      await setData(dataMovie);
      const description = await Detail.getDescription(dataMovie?.id);
      await setDescription(description);
      const movieTrending = await ApiService.getMovie(endpoint);
      setMovieTrending(movieTrending.results);
    } catch {
      setError("Something is error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onFetchHandle();
  }, []);
  return { data, loading, error, linkPath, description, movieTrending };
};

export default UseFetchApi;
