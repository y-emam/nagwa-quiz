import "../../css/rank/Rank.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchRank from "../data/FetchRank";

const Rank = () => {
  const { score } = useParams();
  const { data: rank, isPending, error } = FetchRank(score);

  if (!error) {
    return (
      <div className="rank">
        {error && <h2>Error while trying to load score: {error}</h2>}

        <div className="score-details">
          <h2>Score in the Exam</h2>
          <p>{score}</p>
        </div>
        <div className="rank-details">
          <h2>Rank among students</h2>
          {isPending && <p>...</p>}
          {rank && <p>{rank + "%"}</p>}
        </div>
      </div>
    );
  } else {
    return (
      <div className="rank">
        <h2>Error while trying to load score: {error}</h2>
      </div>
    );
  }
};

export default Rank;
