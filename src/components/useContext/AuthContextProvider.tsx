import { createContext, useState } from "react";

type authUserType = {
  name: string;
  email: string;
};

type authContextType = {
  state: authUserType | null;
  setState: React.Dispatch<React.SetStateAction<authUserType | null>>;
};
type authContextProviderPropsType = {
  children: React.ReactNode;
};
export const authContext = createContext({} as authContextType);
function AuthContextProvider({ children }: authContextProviderPropsType) {
  const [state, setState] = useState<authUserType | null>(null);
  return (
    <authContext.Provider value={{ state, setState }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
