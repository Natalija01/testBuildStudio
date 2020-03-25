<template>
  <div>
    <div class="container mt-3 mb-3">
      <h2>{{ $t("homepage.titleSlider") }}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
        ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
      </p>
    </div>
    <div class="margin-carousel">
      <Slick
        id="slide"
        class="Slick"
        ref="Slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
      >
        <div class="con">
          <img
            class="slides"
            src="@/assets/home-assets/Slider/girl and boy.png"
            alt="Boys and girls"
          />
        </div>
        <div>
          <img
            class="slides"
            src="@/assets/home-assets/Slider/right.png"
            alt="Business"
          />
        </div>
        <div>
          <img
            class="slides link"
            src="@/assets/home-assets/Slider/buttons.png"
            alt="Buttons"
          />
        </div>
        <div>
          <img
            class="slides"
            src="@/assets/home-assets/Slider/social.png"
            alt="Social MEdia"
          />
        </div>
        <div>
          <img
            class="slides"
            src="@/assets/home-assets/Slider/left.png"
            alt="Jezik"
          />
        </div>
      </Slick>

      <div class="container">
        <div>
          <Slick
            id="slide2"
            class="slick-for"
            ref="Slick2"
            :options="slickOptions2"
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
          >
            <div>
              <h3>Dark UI Kit Freebie</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3>Business</h3>
              <p>
                Nullam tellus turpis, fringilla sit amet congue ut, luctus a
                nulla.Nulla facilisi.
              </p>
            </div>
            <div>
              <h3>BUTTONS</h3>
              <p>Pellentesque pellentesque arcu a elit congue lacinia.</p>
            </div>
            <div>
              <h3>SOCIAL</h3>
              <p>Donec sit amet sapien neque, id ullamcorper diam.</p>
            </div>
            <div>
              <h3>JEZIK</h3>
              <p>
                Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
              </p>
            </div>
          </Slick>
        </div>
        <div class="row justify-content-between  ">
          <div id="mobile-none" class="col-md-1 proba">
            <a class="slick-prev" @click="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="21"
                height="31"
                viewBox="0 0 21 31"
              >
                <path
                  d="M15.294,-0.001 L0.001,15.500 L15.294,31.001 L20.999,25.298 L11.332,15.500 L20.999,5.702 L15.294,-0.001 Z"
                  class="cls-1"
                />
              </svg>
            </a>
          </div>
          <div id="mobile-none" class="col-md-1  proba">
            <a class="slick-next" @click="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="21"
                height="31"
                viewBox="0 0 21 31"
              >
                <path
                  d="M5.706,31.001 L20.999,15.500 L5.706,-0.001 L0.001,5.702 L9.668,15.500 L0.001,25.298 L5.706,31.001 Z"
                  class="cls-1"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center "></div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
/* eslint-disable */

export default {
  name: "Carousel",
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        focuseOnSelect: true,
        asNavFor: ".slick-for",
        arrows: false,
        variableWidth: true,
        swipe: false,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 3,
              swipe: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              autoplay: true,
              slidesToShow: 1,
              swipe: true
            }
          }
        ]
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".Slick",
        adaptiveHeight: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.Slick.next();
    },

    prev() {
      this.$refs.Slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    }
  }
};
</script>

<style>
.proba {
  bottom: 85px;
}

.slides {
  width: 300px;
  height: 200px;
  cursor: url("http://www.touristiko.me/test/cursor.png"), auto;
}

#carousel {
  width: 100%;
}
.Slick .slick-slide {
  opacity: 0.5;
  margin-right: 20px;
}

.Slick .slick-current {
  opacity: 1;
}
.margin-carousel {
  margin-bottom: 60px;
}
.link {
  background-image: url("http://www.touristiko.me/test/cursor.png");
  z-index: 9999;
}

@media screen and (max-width: 480px) {
  .margin-carousel {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 770px) {
  #mobile-none {
    display: none;
  }
}
.cls-1 {
  fill: #dadada;
  fill-rule: evenodd;
}
.cls-1:hover {
  fill: #0fd80f;
  cursor: url("http://www.touristiko.me/test/cursor.png"), auto;
}
svg {
  margin-top: 20px;
}
</style>
