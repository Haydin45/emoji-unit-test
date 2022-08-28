import React, { createContext, useContext, useEffect, useState } from "react";
import { emojiList } from "../../data/emojiList";

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState("");
  const [filteredList, setFilteredList] = useState(emojiList);

  useEffect(() => {
    setFilteredList(() =>
      emojiList
        .filter((emoji) => {
          return (
            emoji.keywords.includes(search) ||
            emoji.title.toLowerCase().includes(search.toLowerCase())
          );
        })
        .slice(0, 20)
    );
  }, [search]);

  const values = {
    emojiList,
    search,
    setSearch,
    copiedEmoji,
    setCopiedEmoji,
    filteredList,
  };
  return (
    <EmojiContext.Provider value={values}>{children}</EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
