import "./App.css";
import Humans from "./Human.jsx";
import data from "./data2.jsx";

function App() {
    const people = data.map((human) => {
        return(

            <Humans 
            name={human.name}
            email={human.email}
            address={human.address}
            phone={human.phone}
            website={Human.website}
            />

        );
    });
    return <div className="cards">{people}</div>;
}

export default App;