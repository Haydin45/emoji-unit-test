import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { EmojiProvider } from "../../context/Emoji/EmojiContext";
import Search from "./Search";
import EmojiList from "../EmojiList/EmojiList";

describe("Filtreleme işlemi yapıldığında emoji listesi bu filtreye uygun değişiyor mu?", () => {
  let input;

  beforeEach(() => {
    render(
      <EmojiProvider>
        <Search />
        <EmojiList />
      </EmojiProvider>
    );
    input = screen.getByDisplayValue("");
  });

  test("Anahtar kelime olarak earth yazıldığında listedeki eleman sayısı 3 oluyor mu?", () => {
    userEvent.type(input, "earth");

    expect(screen.getAllByText(/earth/i).length).toEqual(3);
  });
});
