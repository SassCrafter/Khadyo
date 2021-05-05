import React from "react";
import classes from "./TabsList.module.scss";
import Tab from "../Tab/Tab";

function TabsList({ items, active, onChangeTab }) {
  return (
    <ul className={classes.List}>
      {items.map((item, idx) => (
        <Tab
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          isActive={idx === active}
          onChangeTab={onChangeTab}
        />
      ))}
    </ul>
  );
}

export default TabsList;
