type ButtonProps = {
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}

export default Button;
