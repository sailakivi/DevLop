import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Valikko(){
return (
 <div>

  <ul>
    <li>Koti</li>
    <li>Meistä</li>
    <li>Ota yhteyttä</li>
  </ul>

 </div>
)
}

const Sisalto = () => {
  return(
    <h2>Sisältö</h2>
  )
}

const Footer = () => {
  return(
    <footer>Copyright @ Esko Säiläkivi 2024</footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Valikko />
    <Sisalto/>
    <Footer/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
