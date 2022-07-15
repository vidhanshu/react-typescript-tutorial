import React from "react";

type genericListPropsType<T> = {
  list: T[];
  onClickHandler: (value: T) => void;
};
function GenericList<T extends string | number | boolean>({
  list,
  onClickHandler,
}: genericListPropsType<T>) {
  return (
    <div>
      {list.map((e, idx) => {
        return <h3 onClick={() => onClickHandler(e)}>{e}</h3>;
      })}
    </div>
  );
}

export default GenericList;
