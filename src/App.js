import About from "./components/About";
import Menu from "./components/Menu";
import './App.css';

function App() {
  return (
    <div className="main-background">
      <h1 style={{ color: 'brown', textAlign: 'center', paddingTop: '50px' }}>
        黃記粿饌
      </h1>
      <About />
      <Menu />
    </div>
  );
}

export default App;