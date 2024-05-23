import { useState } from "react";


function App() {
    let [count, setCount] = useState(0);
    const add = () => {
      
      console.log(count);
      setCount(count + 1);
      console.log(count);
    };  

    //console.log("Banana Split!");

  return (
    <>
      <button onClick={add}>Click: {count}</button>
    </>
  );
}

export default App
