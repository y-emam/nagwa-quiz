/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../../css/practice/Practice.css";
import FetchWords from "../data/FetchWords";
import { useNavigate } from "react-router-dom";

function Practice() {
  let [counter, setCounter] = useState(0);
  let { data, isPending, error } = FetchWords();
  let [ans, setAns] = useState(null);
  let [rank, setRank] = useState(0);
  const navigate = useNavigate();

  const handleNext = async () => {
    // check if the answer is right or no and show the answer to the user
    const userAns = ans === data[counter].pos ? true : false;

    // change the rank
    if (userAns) {
      setRank(rank + 10);

      // alert("Right answer.");
    }

    // show the answer to the user

    // change the word
    setCounter(counter + 1);

    // disable all buttons and next button
    setAns(null);
  };

  const selectAns = (wordType) => {
    setAns(wordType);
  };

  useEffect(() => {
    console.log(rank);

    // affect progress bar

    // go to the rank page if the words reaches 10
    if (counter >= 10) {
      navigate("/rank/" + rank);
    }
  }, [rank, counter]);

  if (!error) {
    return (
      <div className="Practice">
        {isPending && <h1 className="word">...</h1>}
        {data && <h1 className="word">{data[counter].word}</h1>}

        <div className="btn-row">
          <button
            className={ans === "noun" ? "selected" : "not-selected"}
            onClick={() => {
              selectAns("noun");
            }}
          >
            Noun
          </button>
          <button
            className={ans === "verb" ? "selected" : "not-selected"}
            onClick={() => {
              selectAns("verb");
            }}
          >
            Verb
          </button>
        </div>

        <div className="btn-row">
          <button
            className={ans === "adjective" ? "selected" : "not-selected"}
            onClick={() => {
              selectAns("adjective");
            }}
          >
            Adjective
          </button>
          <button
            className={ans === "adverb" ? "selected" : "not-selected"}
            onClick={() => {
              selectAns("adverb");
            }}
          >
            Adverb
          </button>
        </div>

        <footer>
          <p className="question-no">{counter + 1} / 10</p>
          {!ans && (
            <button className="disabled" onClick={handleNext}>
              Submit
            </button>
          )}
          {ans && (
            <button className="enabled" onClick={handleNext}>
              Submit
            </button>
          )}
        </footer>

        {/* Progress Bar */}
      </div>
    );
  } else {
    return <h2>{`Error while trying to load data: ${error}`}</h2>;
  }
}

export default Practice;
