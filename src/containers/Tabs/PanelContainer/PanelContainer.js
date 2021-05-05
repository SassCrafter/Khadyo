import React, { useEffect, useRef } from "react";
import classes from "./PanelContainer.module.scss";
import Panel from "../Panel/Panel";
import { fadeIn } from "../../../helpers/animations";

function PanelContainer({ panelsData, active }) {
  const containerRef = useRef(null);
  useEffect(() => {
    fadeIn(containerRef.current);
  }, [active]);

  return (
    <div className={classes.Container} ref={containerRef}>
      {panelsData[active].map((item) => (
        <Panel
          key={item.id}
          image={item.image}
          title={item.title}
          ingredients={item.ingredients}
          price={item.price}
          sale={item.sale}
        />
      ))}
    </div>
  );
}

export default PanelContainer;
