/*
this is type like a interface
use type when building applications and use interfaces when building libraries
this is necessary to tell the type and structure of the props getting passed
else it will suggest you an error
*/
type GreetProps = {
  name: string;
  isLoggedIn: boolean;
  notifications: number;
};
/*
this is how we specify type using colon
*/
function Greet(props: GreetProps) {
  return (
    <>
      {props.isLoggedIn
        ? `welcome ${props.name}, you have ${props.notifications} notifications`
        : `welcome guest`}
    </>
  );
}

export default Greet;
