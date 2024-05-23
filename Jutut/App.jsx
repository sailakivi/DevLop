import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);
  console.log(things);

  function lisaaJuttuja(){
    const uusiJuttu = "Juttu ${things.lenght + 1}";
    setThings((prevState) => [...prevState, uusiJuttu]);
    console.log(thingsArray);
  }

  const jutut = things.map((thing) => <p>{thing}</p>);
  return (
    <div>
      <button onClick={lisaaJuttuja}>Add Item</button>
      <button>Add Item</button>
      {jutut}
    </div>
  );
}

export default App;
