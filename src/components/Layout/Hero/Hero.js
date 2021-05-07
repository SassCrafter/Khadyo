import React from "react";
import classes from "./Hero.module.scss";
import {
  Section,
  Flex,
  BigImage,
  Title,
  Button,
  Shape,
  FloatingShape,
} from "../../index";
import Parallax from "./Parallax/Parallax";
import { CHECKOUT } from "../../../constants/routes";

function Hero() {
  return (
    <Section className={`${classes.Container} bg-light`}>
      <Shape
        src="/images/shapes/square-burger.png"
        alt="burger shape"
        position="topLeft"
        className={classes.BurgerShape}
      />
      <Shape
        src="/images/shapes/french-fries.png"
        alt="fries shape"
        position="bottomLeft"
      />
      <Shape
        src="/images/shapes/soda.png"
        alt="soda shape"
        position="bottomRight"
      />
      <Shape
        src="/images/shapes/3-ingredients.png"
        alt="soda shape"
        className={classes.OnText}
      />
      <FloatingShape
        src="/images/shapes/t-slice-color.png"
        alt="soda shape"
        className={classes.FloatTomato}
      />
      <FloatingShape
        direction="horizontal"
        duration={10}
        translate={100}
        src="/images/shapes/leaf-3.png"
        alt="leaf shape"
        className={classes.FloatLeaf}
      />
      <Section.Container>
        <Flex>
          <Flex.Row flexDirection="rowReverse">
            <Flex.Column className="relative">
              <Parallax />
              <BigImage
                src="/images/hero/burger-promo.png"
                alt="Chicken Burger"
                className={classes.Image}
              />
              <Shape
                src="/images/shapes/sale.png"
                alt="sale image"
                className={classes.Sale}
              />
              <Shape
                src="/images/shapes/red-tomato.png"
                alt="tomato shape"
                className={classes.Tomato}
              />
            </Flex.Column>
            <Flex.Column>
              <Title>
                <Title.SmallTitle>Best In Town</Title.SmallTitle>
                <Title.LargeTitle>
                  Enjoy your chicken{" "}
                  <span className="primary-color">Burger</span> Fast Food
                </Title.LargeTitle>
              </Title>
              <h4 className={classes.Name}>Bacon-Potatos-Bbq Sauce</h4>
              <div className={classes.Action}>
                <Button btnType="link" to={CHECKOUT}>
                  Order Now
                </Button>
                <h4 className={classes.Price}>
                  Price:<span className="primary-color">$10.50</span>
                </h4>
              </div>
            </Flex.Column>
          </Flex.Row>
        </Flex>
      </Section.Container>
    </Section>
  );
}

export default Hero;
