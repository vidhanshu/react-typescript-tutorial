type ContainerProps = {
  styles?: React.CSSProperties;
  children:React.ReactNode
};

function Container(props: ContainerProps) {
  return <div style={props.styles}>Container</div>;
}

export default Container;
