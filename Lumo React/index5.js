import "./App.css";
import Kuva from "./components/Kuva";
import Tiedot from "./components/Tiedot";
import Napit from "./components/Napit";
import Teksti from "./components/Teksti";

function App(){
    return(
        <div className="App">
            <Kuva></Kuva>
            <Tiedot></Tiedot>
            <Napit></Napit>
            <Teksti></Teksti>
        </div>
    );
}

export default App;