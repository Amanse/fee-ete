import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokeList() {
  const [pokis, setPoki] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((d) => d.json())
      .then((r) => {
        setPoki(r.results);
        console.log(pokis);
      });
  }, []);

  return (
    <div className="flex flex-wrap max-w-screen justify-evenly">
      {pokis.map((a) => (
        <PokemonCard poke={a} className="max-w-4/12" />
      ))}
    </div>
  );
}
