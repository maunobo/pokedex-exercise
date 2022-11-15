import classes from "./App.css";
import Card from "./Card";

const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

let hand1 = [];
let hand2 = [];
let totalExp1;
let totalExp2;

function expTotal(hand) {
  return hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
}

function deal() {
  hand1 = [];
  hand2 = [...pokemon];
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
    totalExp1 = expTotal(hand1);
    totalExp2 = expTotal(hand2);
  }
  return [hand1, hand2];
}

deal();

function App() {
  return (
    <div className="App">
      <h1>Pokedex!</h1>
      <h2>
        Player 1 - {totalExp1} - {totalExp1 > totalExp2 ? "Winner" : "Loser"}
      </h2>
      {hand1.map((p) => (
        <Card
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
          key={p.id}
        />
      ))}
      <h2>
        Player 2 - {totalExp2} - {totalExp1 > totalExp2 ? "Loser" : "Winner"}
      </h2>
      {hand2.map((p) => (
        <Card
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
          key={p.id}
        />
      ))}
    </div>
  );
}

export default App;
