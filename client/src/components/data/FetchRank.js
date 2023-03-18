import { useEffect, useState } from "react";
require("dotenv").config();

const FetchWords = (score) => {
  let [error, setError] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [data, setData] = useState(null);
  const body = {
    score: score,
  };

  const server_url = process.env.SERVER_URL !== "http://localhost:5000";

  useEffect(() => {
    fetch(server_url + "/api/rank", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
};

export default FetchWords;
