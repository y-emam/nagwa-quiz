import React from "react";
import "../../css/practice/Practice.css";

class Practice extends React.Component {
  getWords = async () => {
    await fetch("http://localhost:5000/api/words")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.data) {
          // this.state.words.push(res.data[0]);
          this.setState({ words: res.data[0] });
        } else {
          throw new Error("Failed to get data from API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      words: [],
      score: 0,
      counter: 0,
    };

    this.getWords();
  }

  getWord() {
    console.log(this.state.words);
  }

  answer(ans) {}

  render() {
    return (
      <div className="Practice">
        <h1 className="word">{this.state.words[0].word}</h1>

        <div className="btn-row">
          <button
            id="btn-noun"
            onClick={() => {
              this.answer("noun");
            }}
          >
            Noun
          </button>
          <button
            id="btn-verb"
            onClick={() => {
              this.answer("verb");
            }}
          >
            Verb
          </button>
        </div>

        <div className="btn-row">
          <button
            id="btn-adj"
            onClick={() => {
              this.answer("adj");
            }}
          >
            Adjective
          </button>
          <button
            id="btn-adv"
            onClick={() => {
              this.answer("adv");
            }}
          >
            Adverb
          </button>
        </div>

        {/* Progress Bar */}
      </div>
    );
  }
}

export default Practice;
