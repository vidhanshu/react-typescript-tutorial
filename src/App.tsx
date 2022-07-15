import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import Persons from "./components/Persons";
import Section from "./components/section/Section";

function App() {
  const name = {
    first: "vidhanshu",
    last: "borade",
  };

  const names = [
    { first: "vidhanshu", last: "borade" },
    { first: "vidit", last: "chawda" },
    { first: "ayush", last: "kumar" },
    { first: "yash", last: "upadhyay" },
    { first: "khushi", last: "mishra" },
    { first: "sanika", last: "peshkar" },
  ];

  return (
    <div className="App">
      <Section>
        <Greet name="vidhanshu" isLoggedIn={true} notifications={13} />
        <Person name={name} />
        <Persons names={names} />
      </Section>
    </div>
  );
}

export default App;
