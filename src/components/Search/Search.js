import React from "react";
import { useEmoji } from "../../context/Emoji/EmojiContext";

const Search = () => {
  const { search, setSearch } = useEmoji();

  return (
    <div className="component-search-input">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
