import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmojiProvider } from "../../context/Emoji/EmojiContext";
import EmojiList from "./EmojiList";

test("Bir emojiye tıkladığımda kopyalama yapıyor mu?", async () => {
  render(
    <EmojiProvider>
      <EmojiList />
    </EmojiProvider>
  );

  const anEmoji = screen.getAllByTestId("emojiCopy")[0];

  expect(anEmoji).toHaveAttribute("data-clipboard-text");
});
