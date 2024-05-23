
//Tehtävä 1

import ReactDom from 'react-dom/client';

function DivElementti(){
    return (
      <div>Tämä on yksinkertainen div-elementti</div>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<DivElementti />);


  //Tehtävä 2

  import ReactDom from 'react-dom/client';

  function Otsikot() {
    return (
      <div>
        <h1>Otsikko</h1>
        <h2>Alaotsikko</h2>
      </div>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Otsikot />);


  // Tehtävä 3

  import ReactDom from 'react-dom/client';

  function Kappale() {
    return (
      <p>Tämä on kappaleen teksti</p>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Kappale />);


  // Tehtävä 4

  import ReactDom from 'react-dom/client';

  function Lista() {
    return (
      <div>
        <ul>
          <li>Ensimmäinen listaelementti</li>
          <li>Toinen listaelementti</li>
          <li>Kolmas listaelementti</li>
        </ul>
      </div>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Lista />);


  //Tehtävä 5

  import ReactDom from 'react-dom/client';

  function Kuva() {
    return (
      <img src="https://m.media-amazon.com/images/I/91H1uVS7QxL._SY466_.jpg" alt="kuva" />
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Kuva />);

  //Tehtävä 6

  import ReactDom from 'react-dom/client';

  function Linkki() {
    return (
      <a href="https://www.keuda.fi">Keuda</a>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Linkki />);

  // Tehtävä 7

  import ReactDom from 'react-dom/client';

  function Taulukko() {
    return (
      <table border="1px">
        <tr>
          <th>Otsikko 1</th>
          <th>Otsikko 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </table>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Taulukko />);


  // Tehtävä 8

  import ReactDom from 'react-dom/client';

  function Ympyra() {
    return (
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="blue" />
      </svg>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Ympyra />);


  // Tehtävä 9

  import ReactDom from 'react-dom/client';

  function Painikkeet() {
    return (
      <div>
        <button>Painike 1</button>
        <button>Painike 2</button>
        <button>Painike 3</button>
      </div>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Painikkeet />);


  // Tehtävä 10

  import ReactDom from 'react-dom/client';

  function Sahkoposti() {
    return (
      <form action="">
        <label htmlFor="email">Sähköposti: <input type="email" /></label>
        <button type="submit">Lähetä</button>
      </form>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Sahkoposti />);


  // Tehtävä 11

  import ReactDom from 'react-dom/client';

  function Kartta() {
    return (
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4687170.455081754!2d19.937562117902992!3d65.10554583680602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sSuomi!5e0!3m2!1sfi!2suk!4v1697640876428!5m2!1sfi!2suk"
        style={{ width: "600", height: "450", frameborder: "0", border: 0, allowfullscreen: "", tabindex: "0" }}>
      </iframe>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Kartta />);

  
   // Tehtävä 12

   import ReactDom from 'react-dom/client';

   function Video() {
    return (
      <video width="320" height="240" controls>
        <source src="https://file-examples.com/storage/fef431be58652d8e49c225d/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
      </video>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<Video />);


  // Tehtävä 13

  import ReactDom from 'react-dom/client';

  function HaeVuodenAika() {
    const date = new Date();
    const month = date.getMonth();
    if (month >= 2 && month <= 4) {
      return "Kevät";
    } else if (month >= 5 && month <= 7) {
      return "Kesä";
    } else if (month >= 8 && month <= 10) {
      return "Syksy";
    } else {
      return "Talvi";
    }
  }
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>Vuoden aika: {<HaeVuodenAika />}</div>);


  // Tehtävä 14

  import ReactDom from 'react-dom/client';

  function HaeSatunnaisluku() {
    return Math.floor(Math.random() * 100) + 1;
  }
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>Satunnaisluku: {<HaeSatunnaisluku />}</div>);


  // Tehtävä 15

  import ReactDom from 'react-dom/client';

  function Home() {
    return (
      <div>Tervetuloa kotisivulleni</div>
    )
  }
  function About() {
    return (
      <div>Tietoa meistä</div>
    )
  }
  function Contact() {
    return (
      <div>Ota yhteyttä</div>
    )
  }
  function Navigointi() {
    return (
      <nav>
        <ul>
          <li><a href="/"><Home /></a></li>
          <li><a href="/about"><About /></a></li>
          <li><a href="/contact"><Contact /></a></li>
        </ul>
  
  
  
      </nav>
    )
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>{<Navigointi />}</div>);


 // Tehtävä 16

  import ReactDom from 'react-dom/client';

  function TaulukkoListaksi() {
    const items = ["Yksi", "Kaksi", "Kolme"];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>{<TaulukkoListaksi />}</div>);


  // Tehtävä 17

  import ReactDom from 'react-dom/client';

function DynaaminenElementti() {
  const dynamicText = "Tämä on dynaaminen teksti";
  return <div>{dynamicText}</div>;
}

const sisalto = document.getElementById('root');
const root = ReactDom.createRoot(sisalto);
root.render(<div>{<DynaaminenElementti />}</div>);


// Tehtävä 18

import ReactDom from 'react-dom/client';

function MapNumerot() {
    const numbers = [1, 2, 3, 4, 5];
    const numberItems = numbers.map((number) => 
    <li key={number}>{number}</li>);
  
    return (
      <ul>
        {numberItems}
      </ul>
    );
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>{<MapNumerot />}</div>);


  // Tehtävä 19

import ReactDom from 'react-dom/client';

function MapNimet() {
    const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];
    const yksiloNimet = nimet.map((nimi, index) => <p 
    key={index}>{nimi}</p>);
  
    return (
      <div>
        {yksiloNimet}
      </div>
    );
  }
  
  const sisalto = document.getElementById('root');
  const root = ReactDom.createRoot(sisalto);
  root.render(<div>{<MapNimet />}</div>);


   // Tehtävä 20

import ReactDom from 'react-dom/client';

function TuoteLista() {
  const tuotteet = [
    { nimi: "Tuote 1", hinta: 10 },
    { nimi: "Tuote 2", hinta: 20 },
    { nimi: "Tuote 3", hinta: 30 },
    { nimi: "Tuote 4", hinta: 40 },
    { nimi: "Tuote 5", hinta: 50 },
  ];

  const yksiloTuotteet = tuotteet.map((tuote, index) => (
    <div key={index}>
      <p>{tuote.nimi}: {tuote.hinta} €</p>
    </div>
  ));

  return (
    <div>
      {yksiloTuotteet}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<TuoteLista />);


// Tehtävä 21

import ReactDom from 'react-dom/client';

const Tervehdys = (props) => {
  return (
    <div>
      <p>Hei {props.name}!</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Tervehdykset</h1>
      <Tervehdys name="Ukko" />
      <Tervehdys name="Pekka" />
    </>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDom.createRoot(sisalto);
root.render(<App />);


// Tehtävä 22

import ReactDom from 'react-dom/client';


const Tuote = (props) => {
  return (
    <div>
      <p>{props.nimi}: {props.hinta} €</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Tuotteet:</h1>
      <Tuote nimi="Vasara" hinta="5" />
      <Tuote nimi="Porakone" hinta="3" />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDom.createRoot(sisalto);
root.render(<App />);


// Tehtävä 23

import ReactDom from 'react-dom/client';

const KokoNimi = (props) => {
  return (
    <div>
      <p>{props.etunimi} {props.sukunimi}</p>
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDom.createRoot(sisalto);
root.render(<KokoNimi etunimi="Ukko" sukunimi="Pekka" />);


// Tehtävä 24

import ReactDom from 'react-dom/client';

const Kommentti = (props) => {
  return (
    <div>
      <p>{props.poliitikko}: <i>{props.teksti}</i></p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Kommentit:</h1>
      <Kommentti poliitikko="Veikko Vennamo" 
      teksti="Kyllä kansa tietää" />
      <Kommentti poliitikko="Mauno Koivisto" 
      teksti="Tarttis tehdä jotakin" />
      <Kommentti poliitikko="Paavo Lipponen" 
      teksti="Nahkurin orsilla tavataan" />
      <Kommentti poliitikko="Timo Soini" 
      teksti="Jytky" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = ReactDom.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 25

import ReactDom from 'react-dom/client';

const Artikkeli = ({ otsikko, sisalto }) => {
  return (
    <div className="artikkeli">
      <h2>{otsikko}</h2>
      <p>{sisalto}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Tervetuloa lukemaan uutisia</h1>
      <Artikkeli
        otsikko="Uusi tutkimus paljastaa: Koirat ymmärtävät yli 100 sanaa"
        sisalto="Tutkijat ovat tehneet läpimurron koirien kielen ymmärtämisessä. Uuden tutkimuksen mukaan koirat kykenevät ymmärtämään yli 100 ihmisen puhumaan sanaa."
      />
      <Artikkeli
        otsikko="Sääennuste: Aurinkoa ja pilviä viikonlopuksi"
        sisalto="Viikonloppuna odotetaan aurinkoista säätä suuressa osassa maata, mutta paikoin esiintyy myös pilvisyyttä ja mahdollisesti sadekuuroja."
      />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 26

import ReactDom from 'react-dom/client';


const Kirja = ({ otsikko, kirjailija, tyylilaji }) => {
  return (
    <div className="kirja">
      <h2>{otsikko}</h2>
      <p><strong>Kirjailija:</strong> {kirjailija}</p>
      <p><strong>Tyylilaji:</strong> {tyylilaji}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Esimerkkejä kirjoista</h1>
      <Kirja
        otsikko="Pimeyden sydän"
        kirjailija="Joseph Conrad"
        tyylilaji="Seikkailu"
      />
      <Kirja
        otsikko="Ylpeys ja ennakkoluulo"
        kirjailija="Jane Austen"
        tyylilaji="Romantiikka"
      />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 27 

import ReactDom from 'react-dom/client';

const Tehtava = (props) => {
  return(
    <div>
      <p>
        Kuvaus:{props.kuvaus}
      </p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Omat tehtävät</h1>
      <Tehtava kuvaus="Kirjoita esseitä" onValmis={false} />
      <Tehtava kuvaus="Tee matematiikan läksyt" onValmis={true} />
      <Tehtava kuvaus="Harjoittele soittamista" onValmis={false} />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 28

import ReactDom from 'react-dom/client';

const Elain = (props) => {
  return (
    <div>
      <p>{props.nimi}, {props.laji}, {props.ika} vuotta vanha</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Eläimet</h1>
      <Elain nimi="Kisu" laji="Kissa" ika="5 vuotta" />
      <Elain nimi="Haukku" laji="Koira" ika="3 vuotta" />
      <Elain nimi="Nipsu" laji="Hamsteri" ika="1 vuosi" />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 29

import ReactDom from 'react-dom/client';

const Elokuva = (props) => {
  return (
    <div>
      <p>{props.nimi}, {props.ohjaaja}, {props.vuosi}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Elokuvat</h1>
      <Elokuva nimi="Pulp Fiction" ohjaaja="Quentin Tarantino" vuosi="1994" />
      <Elokuva nimi="Forrest Gump" ohjaaja="Robert Zemeckis" vuosi="1994" />
      <Elokuva nimi="The Dark Knight" ohjaaja="Christopher Nolan" vuosi="2008" />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);


// Tehtävä 30

import ReactDom from 'react-dom/client';

const Saa = (props) => {
  return (
    <div>
      <p>{props.sijainti}, {props.lampotila} astetta, 
      {props.olosuhteet}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Säätiedot</h1>
      <Saa sijainti="Helsinki" lampotila="15" olosuhteet="Pilvistä" />
      <Saa sijainti="New York" lampotila="20" olosuhteet="Aurinkoista" />
      <Saa sijainti="Tokio" lampotila="25" olosuhteet="Sateista" />
    </div>
  );
};

const sisalto = document.getElementById('root');
const root = ReactDOM.createRoot(sisalto);
root.render(<div>{<App />}</div>);