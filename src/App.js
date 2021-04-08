
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      < br />
      <section>
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/ana-barreira-7529b3183/" target="_blank" rel="noreferrer"> Ana Barreira </a> and is <a href="https://github.com/ana-barreira/dictionary-app" target="_blank" rel="noreferrer">open-source on GitHub</a> and hosted on <a href="https://cocky-jennings-0c697e.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>
      </section>
      </div>
    </div>
  );
}


