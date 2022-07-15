import { useEffect, useRef } from "react";

function DomRef() {
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    ref.current.focus();
  });
  return <input ref={ref} type="text" />;
}

export default DomRef;
