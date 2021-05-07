import React from "react";
import classes from "./Section.module.scss";

function Section({ children, className, containerRelative, ...restProps }) {
  return (
    <section className={`${classes.Section} ${className || ""}`} {...restProps}>
      {children}
    </section>
  );
}

export default Section;

Section.Container = function SectionContainer({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={`container ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
};
