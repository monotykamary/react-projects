import React, { Component } from "react";
import beach from "../img/beach.jpg";
import ninhbinh from '../img/ninhbinh.jpg'
import halong from '../img/halong.jpg'
import danang from '../img/danang.jpg'
import sapa from '../img/sapa.jpg'
import camp from "../img/camp.jpg";
import mountain from "../img/mountain.jpg";
import gulp from "../img/gulp.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: halong,
    //altText: "Slide 1",
    caption: "Hà Nội - Hạ long"
  },
  {
    src: ninhbinh,
    //altText: "Slide 2",
    caption: "Ninh Bình"
  },
  {
    src: danang,
    //altText: "Slide 3",
    caption: "Đà Nẵng - Sơn Trà - Hội An - Bà Nà"
  },
  {
    src: sapa,
    //altText: "Slide 4",
    caption: "Hà Nội - Sapa - Fanshipan - Hạ Long - Tuần Châu - Chùa ba vàng"
  },
];

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="img-carousel" />
          <CarouselCaption
            captionText={item.altText}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default MainCarousel;
