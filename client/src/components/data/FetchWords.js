import { useEffect, useState } from "react";
// require("dotenv").config();

const FetchWords = () => {
  let [error, setError] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [data, setData] = useState(null);

  const server_url = "https://nagwa-exams.onrender.com";

  useEffect(() => {
    fetch(server_url + "/api/words")
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setIsPending(false);
          setData(res.data);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
};

export default FetchWords;
