import "./App.css";
import Auth from "./components/Auth";
import AuthContextProvider from "./components/useContext/AuthContextProvider";
import AuthUsingContext from "./components/useContext/AuthUsingContext";
import Button from "./components/html/Button";
import Container from "./components/Container";
import Counter from "./components/useReducer/Counter";
import CpAuth from "./components/component prop/CpAuth";
import DomRef from "./components/useRef/DomRef";
import GenericList from "./components/generic props/GenericList";
import Greet from "./components/Greet";
import Input from "./components/html/Input";
import Person from "./components/Person";
import Persons from "./components/Persons";
import Private from "./components/component prop/Private";
import RandomNumber from "./components/restricting prop/RandomNumber";
import Section from "./components/section/Section";
import TemplateLiteral from "./components/template literal types/TemplateLiteral";
import ThemeContextProvider from "./components/useContext/ThemeContextProvider";
import { useState } from "react";
import { ClassCounter } from "./components/class/ClassCounter";

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
          <Section title="passing event - this is causing to rerender App.tsx hence getting focused to use ref">
            you have clicked {count} times
            <Button onClick={() => setCount((i) => i + 1)}>click</Button>
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
          <Section title="useRef">
            <DomRef />
          </Section>
          <Section title="class counter">
            <ClassCounter />
          </Section>
          <Section title="component prop auth">
            <CpAuth isLoggedIn={true} component={Private} />
          </Section>
          <Section title="generic prop">
            <GenericList
              list={[1, 2, 3, 4, 5]}
              onClickHandler={(value) => {
                alert("you clicked " + value);
              }}
            />
          </Section>
          <Section title="restricted props">
            <RandomNumber value={-12} isNegative={true} />
          </Section>
          <Section title="Template literal">
            <TemplateLiteral position="center" />
          </Section>
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
