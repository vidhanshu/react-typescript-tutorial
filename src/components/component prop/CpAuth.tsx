import Public from "./Public";
import React from "react";
import { privatePropType } from "./Private";

type cpAuthPropType = {
  isLoggedIn: boolean;
  //ek aisa component jo prop type me privatePropType ka prop leta hai
  component: React.ComponentType<privatePropType>;
};
function CpAuth({ isLoggedIn, component: Component }: cpAuthPropType) {
  if (isLoggedIn) {
    return <Component name="vidhanshu" />;
  } else {
    return <Public />;
  }
}

export default CpAuth;
