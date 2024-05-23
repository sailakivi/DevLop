import { useState, useEffect } from 'react';


function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    const id = setInterval(() => {
      console.log(`[${random}] - Re-Rendered`);
    }, 1000);

    return () => clearInterval(id);
  });

//  useEffect(() => {
//    console.log("Hi There - Counter1!");
//    return () => console.log("Cleanup - Counter1");
//  }, [counter]);

//  useEffect(() => {
//    console.log("Hi There - Counter2!");
//    return () => console.log("Cleanup - Counter2");
//  }, [counter2]);

//  useEffect(() => {
//    console.log("Re-Rendered!");
//    return () => console.log("Re-Rendered Cleanup!");
//  });

//  useEffect(() => {
//    console.log("Mounted!");
//    return () => console.log("Un-Mounted!");
//  }, []);
  

  return (
    <>
      <h1>App</h1>
      <p>Counter: {counter}</p>
      <p>Counter2: {counter2}</p>
      <button onClick={() => setCounter(counter + 1)}>Go Up C1!</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Go Up C2!</button>
    </>
  );
}

export default App;
