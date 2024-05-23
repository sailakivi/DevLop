import Vitsit from "./Vitsit";
import "./App.css";

function App(){
    return (
        <>
        <Vitsit
         kysymys = "Why did the C# developer fall asleep?"
         vastaus = "Because he didn't like Java."
        />
        <Vitsit
        kysymys = "How does a train eat?"
        vastaus = "It goes chew, chew"
        />
        <Vitsit
        kysymys = "Mitä eroa en suomalaisilla häillä ja hautajaisilla?"
        vastaus = "Hautajaisissa on yksi juoppo vähemmän"
        />
        <Vitsit
        kysymys = "Miksi kalat eivät käytä kiellettyjä aineita?"
        vastaus = "Koska ne eivät halua jäädä koukkuun"
        />
        <Vitsit
        kysymys = "Mistä lentokone saa virtansa?"
        vastaus = "Lennonjohdosta"
        />
        </>
    );
}

export default App;