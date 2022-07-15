import React from "react";

export type privatePropType = {
  name: string;
};
function Private({ name }: privatePropType) {
  return <div>You logged in as {name}</div>;
}

export default Private;
