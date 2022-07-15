type ButtonProps = {
  onClickHandler: () => void;
  children: string;
};
function Button(props: ButtonProps) {
  return <button onClick={props.onClickHandler}>{props.children}</button>;
}

export default Button;
