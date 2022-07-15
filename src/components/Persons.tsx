type PersonsProps = {
  names: {
    first: string;
    last: string;
  }[];
};

function Persons(props: PersonsProps) {
  return (
    <div  style={{textTransform:'capitalize'}}>
      {props.names.map((e) => (
        <h4 className="list_item">
          {e.first} {e.last}
        </h4>
      ))}
    </div>
  );
}

export default Persons;
