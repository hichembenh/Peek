import Header from "./components/Header";
import Activite from "./components/Activite";
import Tarif from "./components/Tarifs";
import Programme from "./components/Programme";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Activite/>
      <Tarif/>
      <Programme/>
      <Contact/>
    </div>
  );
}

export default App;
