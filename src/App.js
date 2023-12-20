import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Card, CardSport } from "./card";
import Fencing from "./DnoAXCqVsAATHIO.png";
import { swords } from "./ProdictsSwords";
function App() {
  return (
    <div>
      <img src={Fencing} width="50%"></img>
      <Card />
      <CardSport />
      <Prodicts />
    </div>
  );
}
function Prodicts() {
  return (
    <div class="p-3 mb-2 bg-secondary text-white" className="d-flex">
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
