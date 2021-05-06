import React from "react";
import { Section, Banner, Shape, FloatingShape } from "../../index";
import classes from "./SaleBanners.module.scss";
import { CHECKOUT } from "../../../constants/routes";

function SaleBanners() {
  const btnText = "Order Now";
  return (
    <Section className={classes.Container} containerRelative>
      <Section.Container className="relative">
        <FloatingShape
          src="/images/shapes/leaf.png"
          alt="leaf image"
          className={classes.BounceItem}
        />
        <FloatingShape
          src="/images/shapes/mushroom.png"
          alt="leaf image"
          className={`${classes.BounceItem} ${classes.BounceRight}`}
        />
        <div className={classes.FlexContainer}>
          <Banner
            title="Buzzed Burger"
            subtitle="Sale off 50% only this week"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.FirstBanner} ${classes.BigBanner}`}
          >
            <Shape
              src="/images/shapes/red-burger.png"
              className={classes.Shape}
            />
          </Banner>
          <Banner
            title="Super Delicious Burger"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.SecondBanner}`}
          >
            <div className={classes.Image}>
              <img src="/images/burgers/burger-1.png" alt="burger" />
            </div>
            <span className={classes.Price}>$15</span>
            <Shape
              src="/images/shapes/soda.png"
              className={classes.Shape}
              position="bottomLeft"
            />
          </Banner>
          <Banner
            title="Delicious Burger"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.ThirdBanner}`}
          >
            <div className={classes.Image}>
              <img src="/images/burgers/burger-2.png" alt="burger" />
            </div>
            <span className={classes.Price}>$15</span>
          </Banner>
          <Banner
            title="Super Combo Burger"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.FourthBanner}`}
          >
            <div className={classes.Image}>
              <img src="/images/burgers/burger-3.png" alt="burger" />
            </div>
            <span className={classes.Price}>$15</span>
            <Shape
              src="/images/shapes/soda.png"
              className={classes.Shape}
              position="bottomLeft"
            />
          </Banner>
          <Banner
            title="Super Delicious Burger"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.FifthBanner}`}
          >
            <div className={classes.Image}>
              <img src="/images/burgers/burger-4.png" alt="burger" />
            </div>
            <span className={classes.Price}>$15</span>
          </Banner>
          <Banner
            title="Chicken Combo Burger"
            subtitle="Sale off 50% only this week"
            btnText={btnText}
            to={CHECKOUT}
            className={`${classes.Banner} ${classes.SixthBanner} ${classes.BigBanner}`}
          >
            <Shape
              src="/images/shapes/square-burger.png"
              className={classes.Shape}
            />
          </Banner>
        </div>
      </Section.Container>
    </Section>
  );
}

export default SaleBanners;

// {saleBannersData.map((item) => {
// 					return (
// 						<Banner
// 							key={item.id}
// 							title={item.title}
// 							subtitle={item.subtitle}
// 							btnText="Order Now"
// 							to={CHECKOUT}
// 							bg={item.bg}
// 						/>
// 					);
// 				})}
