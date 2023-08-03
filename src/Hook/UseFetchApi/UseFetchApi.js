import { useEffect, useState } from "react";
import ApiService from "../../Services/ApiService";
import HttpService from "../../Services/HttpService";
import HomepageDetail from "../../Services/HomepageDetail";

const UseFetchApi = () => {
  const [data, setData] = useState({});
  const [linkPath, setLinkPath] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [description, setDescription] = useState();

  const onFetchHandle = async () => {
    setLoading("Loading ...");

    try {
      const linkPath = await HttpService.linkPath();
      await setLinkPath(linkPath);
      const data = await ApiService.getJson(200);
      const dataMovie = await data;
      await setData(dataMovie);
      const description = await HomepageDetail.getDescription(dataMovie?.id);
      await setDescription(description);
    } catch {
      setError("Something is error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onFetchHandle();
  }, []);
  return { data, loading, error, linkPath, description };
};

export default UseFetchApi;
