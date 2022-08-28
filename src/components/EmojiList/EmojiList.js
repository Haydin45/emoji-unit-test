import React from "react";
import { useEmoji } from "../../context/Emoji/EmojiContext";
import Emoji from "./Emoji";
import Clipboard from "clipboard";

const EmojiList = () => {
  const { filteredList } = useEmoji();

  var clipboard = () => new Clipboard(".copy-to-clipboard");
  clipboard();

  return (
    <div>
      {filteredList.map((emoji, index) => (
        <Emoji emoji={emoji} key={index} />
      ))}
    </div>
  );
};

export default EmojiList;
