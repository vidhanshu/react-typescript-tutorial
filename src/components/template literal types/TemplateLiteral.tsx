type horizontalPosition = "left" | "center" | "right";
type verticalPosition = "top" | "center" | "bottom";
type positionType = { position: `${horizontalPosition}-${verticalPosition}` };

function TemplateLiteral({ position }: positionType) {
  return <div>{position}</div>;
}

export default TemplateLiteral;
