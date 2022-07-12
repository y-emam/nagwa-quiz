import React, { useState, useEffect } from "react";
import "../../css/practice/Practice.css";

const answer = (ans, setWord, data, counter, setCounter) => {
  // show which answer is right
  // change the rank
  // activate next button
  // do th function of next button
  // affect progress bar
};

const nextWord = (counter, setCounter, data, setWord) => {
  // change word
  console.log(data[counter].word);
  setWord(data[counter].word);

  // change the cards

  // set counter
  setCounter(counter + 1);
};

function Practice() {
  let [word, setWord] = useState("...");
  let [counter, setCounter] = useState(0);
  let [data, setData] = useState([]);
  let [rank, setRank] = useState(0);

  let [nextBtn, setNextBtn] = useState(<button id="next">Next</button>);

  // console.log(data);

  useEffect(() => {
    fetch("http://localhost:5000/api/words")
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          // setWord(res.data[0].word);
          setData(res.data);
          setNextBtn(
            <button
              className="next disabled"
              disabled="disabled"
              onClick={() => {
                nextWord(counter, setCounter, data, setWord);
              }}
            >
              Next
            </button>
          );
          // if first word add it to the page
          if (counter === 0) {
            nextWord(counter, setCounter, data, setWord);
          }
        } else {
          setData([]);
          throw new Error("Failed to get data from API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="Practice">
      <h1 className="word">{word}</h1>

      <div className="btn-row">
        <button
          id="btn-noun"
          onClick={() => {
            answer("noun", setWord);
          }}
        >
          Noun
        </button>
        <button
          id="btn-verb"
          onClick={() => {
            answer("verb", setWord);
          }}
        >
          Verb
        </button>
      </div>

      <div className="btn-row">
        <button
          id="btn-adj"
          onClick={() => {
            answer("adj", setWord);
          }}
        >
          Adjective
        </button>
        <button
          id="btn-adv"
          onClick={() => {
            answer("adv", setWord);
          }}
        >
          Adverb
        </button>
      </div>

      <footer>
        <p className="question-no">{counter} / 10</p>
        {nextBtn}
      </footer>

      {/* Progress Bar */}
    </div>
  );
}

export default Practice;
