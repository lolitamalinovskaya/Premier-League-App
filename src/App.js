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
import Squads from "./components/Squads";
import MatchInfo from "./components/MatchInfo";

import './App.scss';

function initialState() {
    return {
        players: null,
        teams: null,
        isLoaded: false,
        error: null,
        isFavorite: false, /*in Api*/
        matches: null,
        table: null,
        playersLinks: null,
        matchesLinks: null,
        squad: null,
        matchInfo: null,
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

        return {...state, matches: action.payload, isLoaded: true, matchesLinks: action.next}
    }
    if (action.type === "TABLE") {

        return {...state, table: action.payload, isLoaded: true}
    }
    if (action.type === "SQUAD") {

        return {...state, squad: action.payload, isLoaded: true}
    }
    if (action.type === "MATCH_INFO") {

        return {...state, matchInfo: action.payload, isLoaded: true}
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
                          <Route path="matches/:id" element={<MatchInfo state={state} dispatch={dispatch}/>} />
                          <Route path="teams/:id" element={<Squads state={state} dispatch={dispatch}/>} />
                          <Route exact path="/" element={<Home />} />
                          <Route path="players" element={<Players state={state} dispatch={dispatch}/>} />
                          <Route path="teams" element={<Teams state={state} dispatch={dispatch}/>} />
                          <Route path="matches" element={<Matches state={state} dispatch={dispatch} />} />
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