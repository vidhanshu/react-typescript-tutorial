import { useContext } from "react";
import { authContext } from "./AuthContextProvider";

function Auth() {
  const { state, setState } = useContext(authContext);
  return (
    <div>
      <h4>You logged in as {state?.name || "guest"}</h4>
      <h4>You logged in as {state?.email || "guest"}</h4>
      <button
        onClick={() =>
          setState({
            email: "vidhanshu@example.com",
            name: "vidhanshu",
          })
        }
      >
        login
      </button>
      <button onClick={() => setState(null)}>logout</button>
    </div>
  );
}

export default Auth;
