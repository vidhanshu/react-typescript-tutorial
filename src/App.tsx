import "./App.css";
import Auth from "./components/useState/Auth";
import AuthContextProvider from "./components/useContext/AuthContextProvider";
import AuthUsingContext from "./components/useContext/AuthUsingContext";
import Button from "./components/Button";
import Container from "./components/Container";
import Counter from "./components/useReducer/Counter";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Person from "./components/Person";
import Persons from "./components/Persons";
import Section from "./components/section/Section";
import ThemeContextProvider from "./components/useContext/ThemeContextProvider";
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
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Section title="authentication">
            <Auth />
          </Section>
          <Section title="sending styles">
            <Container
              styles={{ background: "rgba(0,0,0,0.1)", borderRadius: "3px" }}
            >
              <Greet name="vidhanshu" isLoggedIn={true} notifications={13} />
            </Container>
          </Section>
          <Section title="rendering list">
            <Person name={name} />
            <Persons names={names} />
          </Section>
          <Section title="passing event">
            you have clicked {count} times
            <Button onClickHandler={() => setCount((i) => i + 1)}>click</Button>
          </Section>
          <Section title="input">
            <Input
              handleChange={(evt) => {
                console.log(evt.target.value);
              }}
            />
          </Section>
          <Section title="useReducer">
            <Counter />
          </Section>
          <Section title="authentication using context">
            <AuthUsingContext />
          </Section>
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
