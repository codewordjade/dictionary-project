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
          <small>Coded by Jade Knowles</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
