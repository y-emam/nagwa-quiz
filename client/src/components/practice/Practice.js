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
    // affect progress bar
    let progressBar = document.getElementById("progress-bar");

    // console.log(progressBar.clientWidth);

    let width = (rank / 100) * progressBar.offsetWidth;
    console.log(width);

    progressBar.style.boxShadow = `inset ${width}px 0 0 0 rgb(0, 177, 15), 2px 2px 6px rgba(0, 0, 0)`;

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
          <p className="question-no">{`Correct Answers: ${
            rank / 10
          } /${counter}`}</p>
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

        <div className="progress-bar" id="progress-bar"></div>
      </div>
    );
  } else {
    return <h2>{`Error while trying to load data: ${error}`}</h2>;
  }
}

export default Practice;
