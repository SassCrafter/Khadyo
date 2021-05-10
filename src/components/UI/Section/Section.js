import React from "react";
import classes from "./Section.module.scss";

function Section({
  children,
  type = "section",
  className,
  containerRelative,
  ...restProps
}) {
  const sectionClasses = `${classes.Section} ${className || ""}`;
  const element =
    type === "footer" ? (
      <footer className={sectionClasses} {...restProps}>
        {children}
      </footer>
    ) : (
      <section className={sectionClasses} {...restProps}>
        {children}
      </section>
    );

  return element;
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
