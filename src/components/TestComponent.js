import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestComponent() {
  const state = useSelector((state) => state);

  return <div>Testcomponent</div>;
}
