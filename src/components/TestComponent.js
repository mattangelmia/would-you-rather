import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestComponent() {
  const state = useSelector((state) => state);
  console.log(state);

  return <div>TestComponent</div>;
}
