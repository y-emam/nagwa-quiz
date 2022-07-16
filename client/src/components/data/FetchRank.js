import { useEffect, useState } from "react";

const FetchWords = (score) => {
  let [error, setError] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [data, setData] = useState(null);
  const body = {
    score: score,
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/rank", {
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
