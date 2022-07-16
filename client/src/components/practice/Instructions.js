import React from "react";
import "../../css/practice/Instructions.css";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className="Instructions">
      <h1 className="title">Practice Instructions</h1>
      <p className="paragraph">
        In this practice you will get 10 words, your job is to identify if the
        following word is Noun, Verb, Adjective, or Adverb.
      </p>
      <Link to="/practice">
        <button className="btn">Start</button>
      </Link>
    </div>
  );
}

export default Instructions;
