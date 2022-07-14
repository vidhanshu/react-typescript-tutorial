type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: PersonProps) {
  return (
    <p style={{textTransform:'capitalize'}}>
      {props.name.first} {props.name.last}
    </p>
  );
}

export default Person;
