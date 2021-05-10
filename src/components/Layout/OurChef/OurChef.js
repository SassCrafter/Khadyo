import React from "react";
import {
  Section,
  Flex,
  Title,
  BigImage,
  ProductCard,
  Shape,
  FloatingShape,
} from "../../index";
import classes from "./OurChef.module.scss";

function OurChef() {
  return (
    <Section>
      <Section.Container>
        <Flex>
          <Flex.Row ai="start">
            <Flex.Column className="relative">
              <div className={`relative ${classes.Image}`}>
                <BigImage src="/images/ourChef/chef.jpg" alt="Jane Mila Jon" />
                <Shape
                  src="/images/shapes/burger.png"
                  alt="burger shape"
                  className={classes.Burger}
                />
                <FloatingShape
                  src="/images/shapes/leaf-2.png"
                  alt="leaf shape"
                  className={classes.Leaf}
                />
              </div>
            </Flex.Column>
            <Flex.Column className="relative">
              <Title>
                <Title.SmallTitle>Our Chef</Title.SmallTitle>
                <Title.BigTitle>We Serve Pasion</Title.BigTitle>
              </Title>

              <Flex.Row>
                <Flex.Column className="d-flex justify-content-center mobile-justify-content-start">
                  <ProductCard
                    type="vertical"
                    image="/images/burgers/burger-5.png"
                    title="Burger Patties"
                    description="It is a long established fact that a reader BBQ food Chicken."
                    price={15}
                  />
                </Flex.Column>
                <Flex.Column className="d-flex justify-content-center">
                  <ProductCard
                    type="vertical"
                    image="/images/burgers/burger-6.png"
                    title="Burger Patties"
                    description="It is a long established fact that a reader BBQ food Chicken."
                    price={15}
                  />
                </Flex.Column>
              </Flex.Row>
            </Flex.Column>
          </Flex.Row>
        </Flex>
      </Section.Container>
    </Section>
  );
}

export default OurChef;
