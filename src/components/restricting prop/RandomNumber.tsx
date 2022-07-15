import React from "react";

type randomNumber = {
  value: number;
};
type positiveType = randomNumber & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type negativeType = randomNumber & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type zeroType = randomNumber & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type randomNumberType = positiveType | negativeType | zeroType;

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: randomNumberType) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
}

export default RandomNumber;
