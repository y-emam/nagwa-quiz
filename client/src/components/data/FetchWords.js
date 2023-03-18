import { useEffect, useState } from "react";

const FetchWords = () => {
  let [error, setError] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://capable-pithivier-ac7f7e.netlify.app/api/words")
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
