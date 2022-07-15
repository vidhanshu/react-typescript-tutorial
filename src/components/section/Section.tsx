import "./section.css";
import { useContext } from "react";
import { themeContext } from "../useContext/ThemeContextProvider";

/*
this is how we write type of children prop
 */
type SectionProps = {
  children: React.ReactNode;
  title?: string;
};

function Section({ children, title }: SectionProps) {
  const { primary } = useContext(themeContext);
  const { color } = primary;
  return (
    <div className="section-container">
      <h1 style={{ color }}>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
