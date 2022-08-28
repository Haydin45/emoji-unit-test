import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmojiProvider } from "../../context/Emoji/EmojiContext";
import EmojiList from "./EmojiList";

describe("Uygulama ilk açıldığında emoji listesi başarılı bir şekilde render ediliyor mu?", () => {
  test("Uygulama ilk açıldığında listede 20 adet emoji var mı?", () => {
    render(
      <EmojiProvider>
        <EmojiList />
      </EmojiProvider>
    );

    const emojiList = screen.getAllByText(/Click to copy emoji/i);

    expect(emojiList.length).toEqual(20);
  });
});
