import { useReducer } from "react";

type counterStateType = {
  count: number;
};

type updateStateType = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};

type resetStateType = {
  type: "reset";
};
type actionType = updateStateType | resetStateType;

const reducer = (state: counterStateType, action: actionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

const initialState: counterStateType = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>
        reset
      </button>
    </div>
  );
}

export default Counter;
