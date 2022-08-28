import "./App.css";
import EmojiList from "./components/EmojiList/EmojiList";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { EmojiProvider } from "./context/Emoji/EmojiContext";

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <Header />
        <Search />
        <EmojiList />
      </div>
    </EmojiProvider>
  );
}

export default App;
