import About from "./components/About";
import Time from "./components/Time";

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuPage from './pages/MenuPage';

function Home() {
  return (
    <div className="main-background">
      <h1 style={{ color: 'brown', textAlign: 'center', paddingTop: '50px' }}>
        黃記粿饌
      </h1>

      {/* ⭐ 菜單按鈕 */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to="/menu">
          <button style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer'
          }}>
            菜單
          </button>
        </Link>
        <About />
        <Time />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 首頁 */}
        <Route path="/" element={<Home />} />

        {/* 菜單頁 */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}


export default App;
