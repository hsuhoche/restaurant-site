import { Link } from "react-router-dom";
import "./Home.css"; // 可選

function Home() {
  return (
    <div className="main-background">
      <h1>黃記粿饌</h1>

      <Link to="/menu">
        <button>查看菜單</button>
      </Link>
    </div>
  );
}

export default Home;

