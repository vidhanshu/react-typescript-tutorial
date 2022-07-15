import "./section.css";

/*
this is how we write type of children prop
 */
type SectionProps = {
  children: React.ReactNode;
  title?: string;
};

function Section({ children, title }: SectionProps) {
  return (
    <div className="section-container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
