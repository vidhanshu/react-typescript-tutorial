type ContainerProps = {
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

function Container(props: ContainerProps) {
  return (
    <div className="container" style={props.styles}>
      {props.children}
    </div>
  );
}

export default Container;
