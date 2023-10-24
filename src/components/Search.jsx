import { useState } from "react";
import ListOfPokis from "../assets/PokemonList";
import PokemonCard from "./PokemonCard";

export default function Search() {
  const [searchTerm, setTerm] = useState("");
  const [result, setRes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const matches = ListOfPokis.filter((s) =>
      s.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setRes(matches);

    window.scrollBy(100);
  };

  return (
    <>
      <center className="bg-base-200">
        <h1 className="text-3xl py-10">Get started</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="main-search-input"
            placeholder="Search by name"
            onChange={(e) => setTerm(e.target.value)}
            className="input input-bordered input-secondary w-1/2 my-5"
          />
        </form>
      </center>
      <div className="flex flex-wrap max-w-screen justify-evenly">
        {result.map((a) => (
          <PokemonCard key={a} poke={a} className="max-w-4/12" />
        ))}
      </div>
    </>
  );
}
