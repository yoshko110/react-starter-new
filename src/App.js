import logo from "./logo.svg";
import "./App.css";
import { Card, CardSport } from "./card";
import Fencing from "./DnoAXCqVsAATHIO.png";

function App() {
  return (
    <div>
      <Card></Card>
      <CardSport></CardSport>
      <img src={Fencing} width="50%"></img>
    </div>
  );
}

export default App;
