<template>
  <div class="home">
    <navBar></navBar>
    <heroImg></heroImg>
    <ytModal></ytModal>
    <slider></slider>
    <Footer></Footer>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import heroImg from "@/components/heroImg.vue";
import ytModal from "@/components/ytModal.vue";
import slider from "@/components/slider.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    navBar,
    heroImg,
    ytModal,
    slider,
    Footer
  }
};
</script>
