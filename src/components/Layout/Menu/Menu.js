import React from "react";
import classes from "./Menu.module.scss";
import { Section, Title, Shape, FloatingShape } from "../../index";
import { Tabs } from "../../../containers";
import menuData from "../../../fixtures/menuData";

function Menu() {
  const categories = menuData.map((el) => ({
    title: el.name,
    id: el.id,
    image: el.image,
  }));
  const menuItems = menuData.map((el) => {
    return el.items.map((item) => {
      return {
        id: item.id,
        image: item.image,
        title: item.name,
        ingredients: item.ingredients,
        price: item.price,
        sale: item.sale,
      };
    });
  });
  return (
    <Section className={`${classes.Container} relative`} containerRelative>
      <Shape
        className={classes.Donuts}
        src="/images/shapes/donuts.png"
        alt="donuts shape"
        position="topRight"
      />
      <Shape
        className={classes.Burger}
        src="/images/shapes/burger.png"
        alt="burger shape"
      />
      <Shape
        className={classes.Scatter}
        src="/images/shapes/scatter.png"
        alt="scatter shape"
      />
      <FloatingShape
        className={classes.Tomato}
        src="/images/shapes/sm-tomato.png"
        alt="Tomato shape"
      />
      <FloatingShape
        className={classes.Triple}
        src="/images/shapes/triple.png"
        alt="Triple shape"
      />
      <Section.Container className="relative">
        <Title>
          <Title.SmallTitle>Food Items</Title.SmallTitle>
          <Title.BigTitle>
            Popular <span className="primary-color">Menu</span>
          </Title.BigTitle>
        </Title>
        <Tabs tabItems={categories} panelItems={menuItems} />
      </Section.Container>
    </Section>
  );
}

export default Menu;
