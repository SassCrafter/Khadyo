import React from "react";
import classes from "./Section.module.scss";

// function Section({ children, className, container = true, containerRelative }) {
//   return (
//     <section className={`${classes.Section} ${className || ""}`}>
//       {!container ? (
//         children
//       ) : (
//         <div
//           className={`container ${containerRelative ? classes.Container : ""}`}
//         >
//           {children}
//         </div>
//       )}
//     </section>
//   );
// }

// export default Section;

function Section({ children, className }) {
  return (
    <section className={`${classes.Section} ${className || ""}`}>
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
