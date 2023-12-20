import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Card, CardSport } from "./card";
import Fencing from "./DnoAXCqVsAATHIO.png";
import { swords } from "./ProdictsSwords";
function App() {
  return (
    <div>
      <Card />
      <CardSport></CardSport>
      <Prodicts></Prodicts>

      <img src={Fencing} width="50%"></img>
    </div>
  );
}
function Prodicts() {
  return (
    <div>
      {swords.map((sword) => (
        <>
          <img src={sword.imgFoto} width="15%" />
          <h1>{sword.descrapt}</h1>
          <p>{sword.price}</p>
        </>
      ))}
    </div>
  );
}

export default App;
