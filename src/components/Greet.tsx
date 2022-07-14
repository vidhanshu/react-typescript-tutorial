/*
this is type like a interface
use type when building applications and use interfaces when building libraries
this is necessary to tell the type and structure of the props getting passed
else it will suggest you an error
*/
type GreetProps = {
  name: string;
};
/*
this is how we specify type using colon
*/
function Greet(props: GreetProps) {
  return <div>Greeting {props.name}</div>;
}

export default Greet;
