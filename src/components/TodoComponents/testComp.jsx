import React from "react";

export const Messssage = props => {
  return <h1>Current message: {props.propsMessage}</h1>;
};
export const Name = props => {
  return <h1>My name is: {props.propsName}</h1>;
};
export const Updated = props => {
  return <h1>Content: {props.propsUpdated}</h1>;
};
