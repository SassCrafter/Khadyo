import React from "react";
import classes from "./Delivery.module.scss";
import { Section, Flex, Title, BigImage, OrderBox, Shape } from "../../index";

function Delivery() {
  return (
    <Section className="relative">
      <Shape
        src="/images/shapes/pizza.png"
        alt="pizza shape"
        className={classes.PizzaShape}
      />
      <Shape
        src="/images/shapes/leaf-2.png"
        alt="leaf shape"
        className={classes.LeafShape}
      />
      <Section.Container className="relative">
        <Flex>
          <Flex.Row flexDirection="rowReverse">
            <Flex.Column>
              <BigImage
                src="/images/delivery/bike.png"
                alt="bike delivery image"
              />
            </Flex.Column>
            <Flex.Column>
              <Title>
                <Title.SmallTitle>Delivery</Title.SmallTitle>
                <Title.BigTitle>
                  A Moments Of Delivered
                  <span className="primary-color">On Right Time & Place</span>
                </Title.BigTitle>
                <Title.Lead>
                  Food Khan is a restaurant, bar and coffee roastery located on
                  a busy corner site in Farringdon's Exmouth Market. With glazed
                  frontage on two sides of the building, overlooking the market
                  and a bustling London inteon.
                </Title.Lead>
              </Title>
              <OrderBox
                className={classes.OrderBox}
                iconClass={classes.Icon}
                textClass={classes.Text}
              />
            </Flex.Column>
          </Flex.Row>
        </Flex>
      </Section.Container>
    </Section>
  );
}

export default Delivery;
