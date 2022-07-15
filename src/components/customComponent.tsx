import React from "react";
import Section from "./section/Section";

function customComponent(props: React.ComponentProps<typeof Section>) {
  return <div>{props.title}</div>;
}

export default customComponent;
