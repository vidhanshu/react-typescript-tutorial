import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Input from "./components/section/Input";
import Person from "./components/Person";
import Persons from "./components/Persons";
import Section from "./components/section/Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
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
        <Container styles={{ border: "1px solid red" }}>
          <Greet name="vidhanshu" isLoggedIn={true} notifications={13} />
        </Container>
        <Person name={name} />
        <Persons names={names} />
      </Section>
      <Section>
        you have clicked {count} times
        <Button onClickHandler={() => setCount((i) => i + 1)}>click</Button>
        <Input
          handleChange={(evt) => {
            console.log(evt.target.value);
          }}
        />
      </Section>
    </div>
  );
}

export default App;
