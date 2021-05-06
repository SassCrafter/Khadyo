import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./Transition.module.scss";

function FadeInOut({
  children,
  transitionClass = classes.Container,
  timeOut = 200,
}) {
  const [inProp, setInProp] = useState(false);
  return (
    <CSSTransition in={inProp} timeout={timeOut} classNames={classes.Container}>
      {children}
    </CSSTransition>
  );
}

export default FadeInOut;
