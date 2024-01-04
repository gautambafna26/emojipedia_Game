import React, { useState } from "react";
import "./App.css"

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); 
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); 
  }
  return (
    <div className="App">
      <h1>Emoji-Pedia</h1>

      <input onChange={emojiInputHandler} />

      <h1 className="h2"> {meaning} </h1>

      <h2> Emojis we know </h2>
      <div className="emoji">
      {emojisWeKnow.map(function (emoji) {
        return (

          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      </div>
    </div>
  );
}
