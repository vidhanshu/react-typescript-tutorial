import { createContext } from "react";
import { theme } from "./theme";

type contextProp = {
  children: React.ReactNode;
};
export const themeContext = createContext(theme);
function ThemeContextProvider(props: contextProp) {
  return (
    <themeContext.Provider value={theme}>
      {props.children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
