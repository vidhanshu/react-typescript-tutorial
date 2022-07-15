type InputProps = {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return <input onChange={props.handleChange} />;
}

export default Input;
