import { document } from "postcss";
import Pikachu from "../assets/pokemon_PNG78.png";

export default function MainHero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Pikachu}
          className="max-w-sm w-1/2 h-1/2 max-h-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">MiniPokiDex</h1>
          <p className="py-6">A mini PokiDex made as our ETE Project for FEE</p>
          <button
            onClick={() => {
              window.scrollBy(0, 500);
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
