import { useState } from "react";
import "./App.css";
import MainHero from "./components/MainHero";
import PokeList from "./components/PokeList";
import Search from "./components/Search";

function App() {
  return (
    <>
      <MainHero />
      <Search />
    </>
  );
}

export default App;
