import React, { useEffect, useRef } from "react";
import classes from "./Hero.module.scss";
import { Section, Flex, BigImage, Title, Button, Shape } from "../../index";
import { MouseParallax } from "../../../containers/";
import { CHECKOUT } from "../../../constants/routes";
import heroParallaxShapes from "../../../fixtures/heroParallaxShapes";

function Hero() {
  // const itemsRef = useRef([]);

  // useEffect(() => {
  //   itemsRef.current = itemsRef.current.slice(0, heroParallaxShapes.length);
  // }, []);

  const renderParallaxItems = () => {
    return heroParallaxShapes?.map((item, idx) => {
      return (
        <Shape
          className={classes.Item}
          key={item.id}
          src={item.image}
          alt={item.alt}
          className={classes.ParallaxItem}
          ref={(el) => (itemsRef.current[idx] = el)}
        />
      );
    });
  };

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
      <Flex>
        <Flex.Row flexDirection="rowReverse">
          <Flex.Column>
            <BigImage
              src="/images/hero/burger-promo.png"
              alt="Chicken Burger"
              className={classes.Image}
            />
          </Flex.Column>
          <Flex.Column>
            <Title>
              <Title.SmallTitle>Best In Town</Title.SmallTitle>
              <Title.LargeTitle>
                Enjoy your chicken <span className="primary-color">Burger</span>{" "}
                Fast Food
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
    </Section>
  );
}

export default Hero;
