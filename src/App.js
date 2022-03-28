import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useReducer} from "react";
import Navbar from './components/Navbar'
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Table from "./pages/Table";
import Home from "./pages/Home";
import {Footer} from "./components/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

import './App.scss';

function initialState() {
    return {
        players: null,
        teams: null,
        isLoaded: false,
        error: null,
        isFavorite: false,
        matches: null,
        table: null,
        playersLinks: null,
    };
}

function reducer(state, action) {
    if (action.type === "PLAYERS") {

        return {...state, players: action.payload, isLoaded: true, playersLinks: action.next}
    }
    if (action.type === "ERROR") {

        return {...state, error: action.payload}
    }
    if (action.type === "TEAMS") {

        return {...state, teams: action.payload, isLoaded: true}
    }
    if (action.type === "FAVORITE_TEAM") {

        return {...state, isFavorite: true}
    }
    if (action.type === "MATCHES") {

        return {...state, matches: action.payload, isLoaded: true}
    }
    if (action.type === "TABLE") {

        return {...state, table: action.payload, isLoaded: true}
    }

  return state;
}


function App() {
  const [state, dispatch] = useReducer(reducer, {}, initialState);

  return (
      <div className="wrapper-bg">
          <section className="wrapper">
                  <Router>
                      <Navbar />
                      <Routes>
                          <Route exact path={'/'} element={<Home />} />
                          <Route path="players" element={<Players state={state} dispatch={dispatch}/>} />
                          <Route path="teams" element={<Teams state={state} dispatch={dispatch}/>} />
                          <Route path="matches" element={<Matches state={state} dispatch={dispatch}/>} />
                          <Route path="table" element={<Table state={state} dispatch={dispatch}/>} />
                          <Route path="logIn" element={<LogIn />} />
                          <Route path="signUp" element={<SignUp />} />
                      </Routes>
                  </Router>
              <Footer />
          </section>
      </div>
  );
}

export default App;