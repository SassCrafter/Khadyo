import React from "react";
import classes from "./BestQuality.module.scss";
import { Section, Title, Flex, Ingredient, BigImage, Shape } from "../../index";

function BestQuality() {
  return (
    <Section className="bg-soft-pink relative">
      <Shape
        src="/images/bestQuality/left.png"
        alt="left image"
        position="bottomLeft"
        className={classes.LeftShape}
      />
      <Shape
        src="/images/bestQuality/right.png"
        alt="right image"
        position="bottomRight"
        className={classes.RightShape}
      />
      <Section.Container>
        <Title textAlign="center" mw>
          <Title.SmallTitle>Why Choose Us?</Title.SmallTitle>
          <Title.BigTitle>
            Best Quality
            <span className="primary-color">Item Ingredients</span>
          </Title.BigTitle>
        </Title>
        <Flex>
          <Flex.Row cols="three">
            <Flex.Column className={classes.Ingredient}>
              <Ingredient
                title="Moist Sour Cream"
                ingredients="Shrimp, Squid, Pineapple"
                price="5"
                className={classes.IngredientItem}
              />
              <Ingredient
                title="Ground Beef"
                ingredients="Shrimp, Squid, Pineapple"
                price="5"
                className={classes.IngredientItem}
              />
            </Flex.Column>
            <Flex.Column className={classes.Image}>
              <BigImage
                src="/images/burgers/dblburger.png"
                alt="burger image"
              />
            </Flex.Column>
            <Flex.Column className={`${classes.Ingredient} ${classes.Right}`}>
              <Ingredient
                title="Green Vegetable"
                ingredients="Tomato, Cucumber, Onion"
                price="5"
                className={classes.IngredientItem}
              />
              <Ingredient
                title="Artisen Bunas"
                ingredients="Shrimp, Squid, Pineapple"
                price="5"
                className={classes.IngredientItem}
              />
            </Flex.Column>
          </Flex.Row>
        </Flex>
      </Section.Container>
    </Section>
  );
}

export default BestQuality;
