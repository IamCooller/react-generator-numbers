import logo from './logo.svg';
import './App.css';
import RandomList from './Components/RandomList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <section>
        <p>
          Random number generator
        </p>
        </section>
        <section>
          <RandomList/>
        </section>
      </main>
    </div>
  );
}

export default App;
