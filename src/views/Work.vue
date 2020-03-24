<template>
  <div>
    <navBar />
    <div class="container-fluid" style="background-color:#4CAF50">
      <div class="container">
        <div class="row py-3">
          <div class="col">
            <h6 class="font-weight-bold">CHECK WHAT CAN I DO</h6>
          </div>
        </div>
      </div>
    </div>
    <workGallery />
    <Footer />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import workGallery from "@/components/workGallery.vue";

export default {
  components: {
    navBar,
    workGallery
  }
};
</script>

<style>
h6 {
  color: white;
  float: left;
}
</style>
