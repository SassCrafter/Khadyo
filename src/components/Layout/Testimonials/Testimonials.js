import React from "react";
import { Section, Title, Slider } from "../../index";
import Slide from "./Slide/Slide";
import classes from "./Testimonials.module.scss";
import testimonialsData from "../../../fixtures/testimonialsData";

function Testimonials() {
  const renderSlides = (Wrapper) => {
    return testimonialsData.map((item) => (
      <Wrapper key={item.id}>
        <Slide
          image={item.image}
          name={item.name}
          position={item.position}
          rating={item.rating}
          message={item.message}
        />
      </Wrapper>
    ));
  };

  return (
    <Section>
      <Section.Container>
        <Title textAlign="center">
          <Title.SmallTitle>Testimonials</Title.SmallTitle>
          <Title.BigTitle>
            Client <span className="primary-color">Feedback</span>
          </Title.BigTitle>
        </Title>
        <Slider
          className={classes.Container}
          spaceBetween={50}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            el: `.${classes.Pagination}`,
            clickable: true,
            bulletClass: classes.Bullet,
            bulletActiveClass: classes.BulletActive,
          }}
          renderSlides={renderSlides}
        >
          <div className={classes.Pagination}></div>
        </Slider>
      </Section.Container>
    </Section>
  );
}

export default Testimonials;
