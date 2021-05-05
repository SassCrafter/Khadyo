import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import TabsList from "./TabsList/TabsList";
import PanelContainer from "./PanelContainer/PanelContainer";

function Tabs({ tabItems, panelItems, renderTab, renderPanel }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTabHandler = (id) => {
    setActiveIndex(id);
  };
  return (
    <div className={classes.Container}>
      <TabsList
        items={tabItems}
        active={activeIndex}
        onChangeTab={changeTabHandler}
      />
      <PanelContainer panelsData={panelItems} active={activeIndex} />
    </div>
  );
}

export default Tabs;
