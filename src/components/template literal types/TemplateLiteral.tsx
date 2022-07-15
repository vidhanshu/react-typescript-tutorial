type horizontalPosition = "left" | "center" | "right";
type verticalPosition = "top" | "center" | "bottom";
type positionType = {
  position:
    | Exclude<`${horizontalPosition}-${verticalPosition}`, "center-center">
    | "center";
};

function TemplateLiteral({ position }: positionType) {
  return <div>{position}</div>;
}

export default TemplateLiteral;
