import { useEffect, useState } from "react";
import ApiService from "../../Services/ApiService";
import HttpService from "../../Services/HttpService";
import HomepageDetail from "../../Services/HomepageDetail";

const UseFetchApi = () => {
  const [data, setData] = useState([]);
  const [linkPath, setLinkPath] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [description, setDescription] = useState();
  const array = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
  const onFetchHandle = async () => {
    setLoading("Loading ...");

    try {
      const linkPath = await HttpService.linkPath();
      await setLinkPath(linkPath);
      await array.map(async (number) => {
        const dataMovie = await ApiService.getJson(number);
        const description = await HomepageDetail.getDescription(dataMovie?.id);
        await setDescription(description);
        return await data.push(dataMovie);
      });
      await setData(data);
      console.log(data);
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
