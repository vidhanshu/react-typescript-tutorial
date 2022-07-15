import "./section.css";

/*
this is how we write type of children prop
 */
type SectionProps = {
  children: React.ReactNode;
};

function Section(props: SectionProps) {
  return <div className="section-container">{props.children}</div>;
}

export default Section;
