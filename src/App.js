import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Table from "./pages/Table";
import Home from "./pages/Home";
import {Footer} from "./components/Footer";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";

import './App.scss';

function App() {
  return (
      <div className="wrapper-bg">
          <section className="wrapper">
                  <Router>
                      <Navbar />
                      <Routes>
                          <Route exact path={'/'} element={<Home />} />
                          <Route path="players" element={<Players />} />
                          <Route path="teams" element={<Teams />} />
                          <Route path="matches" element={<Matches />} />
                          <Route path="table" element={<Table />} />
                          <Route path="logIn" element={<LogIn />} />
                          <Route path="logUp" element={<LogUp />} />
                      </Routes>
                  </Router>
              <Footer />
          </section>
      </div>
  );
}

export default App;
