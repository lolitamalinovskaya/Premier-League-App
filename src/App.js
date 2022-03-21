import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Table from "./pages/Table";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Navbar />
              <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route path="players" element={<Players />} />
                  <Route path="teams" element={<Teams />} />
                  <Route path="matches" element={<Matches />} />
                  <Route path="table" element={<Table />} />
              </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
