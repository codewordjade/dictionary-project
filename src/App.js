import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="title">Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://linkedin.com/in/jadeknowles"
              target="_blank"
              rel="noreferrer"
            >
              Jade Knowles
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/codewordjade/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://musing-swirles-b9b402.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
