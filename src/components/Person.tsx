import { PersonType } from "./person.types";

function Person(props: PersonType) {
  return (
    <p style={{ textTransform: "capitalize" }}>
      {props.name.first} {props.name.last}
    </p>
  );
}

export default Person;
