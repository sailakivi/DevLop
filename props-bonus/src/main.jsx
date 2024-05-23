import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//import Section from "./ex1/Section.jsx";
//import Section from "./ex2/Section.jsx";
//import Section from "./ex3/Profile.jsx";
import Paragraph from "./bonus/Paragraph.jsx";


function sayBoo(){
  console.log("Boo from main.jsx!");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Section /> */}
    {/*<Profile 
      profileText={"Profile"}
      cardText={"Card"}
      buttonText={"Click Me!"}
      handleClick={sayBoo}
    />  */}
    <Paragraph text="Hello Banana!">
      <h1>H1 from main.jsx!</h1>
    </Paragraph>  

  </React.StrictMode>,
);
