import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Başlık kısmının başarılı şekilde render edilmesi", () => {
  let headerElement, smileCat, happyCat;

  beforeAll(() => {
    render(<Header />);
    headerElement = screen.getByText("Emoji Search");
    smileCat = screen.getByAltText("smile cat");
    happyCat = screen.getByAltText("happy cat");
  });

  test("Başlıktaki yazı var mı?", () => {
    expect(headerElement).toBeInTheDocument();
  });

  test("Başlık yazısının solundaki icon doğru mu?", () => {
    expect(smileCat).toHaveAttribute(
      "src",
      "//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
    );
  });

  test("Başlık yazısının sağındaki icon doğru mu?", () => {
    expect(happyCat).toHaveAttribute(
      "src",
      "//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
    );
  });
});
