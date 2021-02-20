import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [records, setRecord] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchURL = async () => {
    const { data } = await axios.get(url);
    setRecord(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return [records, loading];
};
export default useFetch;
