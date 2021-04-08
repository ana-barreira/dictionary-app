
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <h1>What are you searching for?</h1>
        < br />
        <Dictionary defaultKeyword="sunset" />
      </main>
      < br />
      <footer>
        Coded by <a href="https://github.com/ana-barreira/dictionary-app" target="_blank" rel="noreferrer"> Ana Barreira </a>
      </footer>
      </div>
    </div>
  );
}


