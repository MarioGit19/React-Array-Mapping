import React from "react";
import NewEmoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(Emoji) {
  return (
    <NewEmoji
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
