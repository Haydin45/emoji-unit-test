import React from "react";

const Emoji = ({ emoji }) => {
  const codePointHex = emoji.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={emoji.symbol}
      data-testid="emojiCopy"
    >
      <img alt={emoji.title} src={src} />
      <span className="title">{emoji.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

export default Emoji;
