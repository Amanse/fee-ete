import { useEffect, useState } from "react";

export default function PokemonCard(props) {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(props);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke.toLowerCase()}`)
      .then((d) => d.json())
      .then((r) => {
        setDetail(r);
      });
    setLoading(false);
  }, []);

  const genStats = (statArr) => {
    return (
      <>
        {statArr.map((a) => (
          <p class="mt-4">
            {a.stat.name}: {a.base_stat}
          </p>
        ))}
      </>
    );
  };

  let ifLoaded = (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detail.id}.png`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{detail.name}</h2>
        <p>Height: {detail.height}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary"
            onClick={() =>
              document.getElementById(`poke_${detail.id}`).showModal()
            }
          >
            View more
          </button>
        </div>
      </div>
      <dialog id={`poke_${detail.id}`} className="modal">
        <div className="modal-box">
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detail.id}.png`}
              />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${detail.id}.png`}
              />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-lg">{detail.name}</h3>

              <p className="mt-8">Height: {detail.height}</p>
              <p className="mt-4">
                Types:{" "}
                {detail["types"] ? detail["types"].map((a) => a.type.name) : ""}
              </p>
              {detail["stats"] ? genStats(detail["stats"]) : ""}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );

  if (!loading) {
    return ifLoaded;
  } else {
    return <span>Loading</span>;
  }
}
