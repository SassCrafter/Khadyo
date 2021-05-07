import React, { useEffect, useRef } from "react";
import classes from "./PanelContainer.module.scss";
import Panel from "../Panel/Panel";
import { fadeIn } from "../../../helpers/animations";

function PanelContainer({ panelsData, active, renderPanels }) {
  const containerRef = useRef(null);
  useEffect(() => {
    fadeIn(containerRef.current);
  }, [active]);

  return (
    <div className={classes.Container} ref={containerRef}>
      {renderPanels ? renderPanels(active, Panel) : <p>Hello</p>}
    </div>
  );
}

export default PanelContainer;

// {panelsData[active].map((item) => (
//   <Panel
//     key={item.id}
//     image={item.image}
//     title={item.title}
//     ingredients={item.ingredients}
//     price={item.price}
//     sale={item.sale}
//   />
// ))}
