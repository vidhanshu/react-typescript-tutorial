import Button from "./html/Button";
import { useState } from "react";

type user = {
  name: string;
};

function Auth() {
  const [user, setUser] = useState<user>({} as user);

  return (
    <div>
      <Button
        onClick={() =>
          setUser({
            name: "vidhanshu",
          })
        }
      >
        login
      </Button>
      <Button onClick={() => setUser({} as user)}>logout</Button>
      <div>logged in as {user.name || "guest"}</div>
    </div>
  );
}

export default Auth;
