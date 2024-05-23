import Kissa from "../components/Kissa";

import "../src/App.css";

function App(){     
     return(    
          <div className="contacts">
              <Kissa 
              img ="../images/Whiskerson.png"
              name ="Mr. Whiskerson"
              phone ="(212) 555-1234"
              email ="mr.whiskaz@carnap.meow"
               />
              <Kissa 
              img ="../images/fluffy.png"
              name ="Fluffykins"
              phone ="(212) 555-2345"
              email ="mfluff@me.com"
              />
              <Kissa 
              img ="../images/felix.png"
              name ="Felix"
              phone ="(212) 555-4567"
              email ="thecat@hotmail.com"
              />
              <Kissa 
              img ="../images/pumpkin.png"
              name ="Pumpkin"
              phone ="(0800) CAT KING"
              email ="pumpkin@scrimba.com"
              />
          </div>       
    );
}
