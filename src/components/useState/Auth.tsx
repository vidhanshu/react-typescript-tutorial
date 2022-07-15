import Button from "./../Button";
import { useState } from "react";

type user = {
  name: string;
};

function Auth() {
  const [user, setUser] = useState<user>({} as user);

  return (
    <div>
      <Button
        onClickHandler={() =>
          setUser({
            name: "vidhanshu",
          })
        }
      >
        login
      </Button>
      <Button onClickHandler={() => setUser({} as user)}>logout</Button>
      <div>logged in as {user.name || "guest"}</div>
    </div>
  );
}

export default Auth;
