<template>
  <div class="container-fluid noGutter">
    <section class="jumbotron text-center mb-0 ">
      <div class="container ">
        <img
          id="slider-overimage"
          class="imgAnimation"
          src="@/assets/home-assets/Hero IMG/slider-overimage.png"
          width="80%"
        />
        <p class="lead text-muted px-5 pt-3 boja textAnimation">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus
          eu.
        </p>
        <p>
          <button type="button" class="btn btn-success mt-3 btnAnimation">
            BROWSE PORTFOLIO
          </button>
        </p>
      </div>
    </section>
  </div>
</template>

<script></script>

<style>
.jumbotron {
  background-image: url("http://www.touristiko.me/test/slider-background.png");
  background-size: 100% 100%;
}
.btn-green {
  color: #fff;
  background-color: #29d14d;
  border-color: #29d14d;
}
.boja {
  color: #8a8888;
}

@keyframes scale {
  0% {
    transform: scale(0);
    transform-origin: 50% 50%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 50%;
  }
}

.imgAnimation {
  animation: scale 2s ease-in-out 1 forwards;
}
.textAnimation {
  animation: scale 4s ease-in-out 1 forwards;
}
.btnAnimation {
  animation: scale 7s ease-in-out 1 forwards;
}
</style>
