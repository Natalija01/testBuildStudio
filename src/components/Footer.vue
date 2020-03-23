<template>
  <!-- Footer -->
  <footer class="page-footer font-small teal ">
    <!-- Footer Text -->
    <div class="container-fluid text-center  upf">
      <!-- Grid row -->

      <div class="row ">
        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 justify-content-center">
          <!-- Content -->
          <h5 class="text-uppercase font-weight-bold mt-5 " style="color:white">
            ARE YOU READY TO BE BLOWN AWAY?
          </h5>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3" />

        <!-- Grid column -->
        <div class="col-md-6 mb-md-0 mt-5 d-flex justify-content-center ">
          <!-- Content -->
          <button class="btn btn-success mb-4 ">
            CLICK HERE TO FIND OUT
          </button>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>

    <!-- Footer Text -->
    <div class="container-fluid text-center  upd">
      <!-- Copyright -->
      <div class="row">
        <div class="col-md-6 justify-content-center pt-3 pb-3">
          Copyright 2013 Display. All rights reserved
        </div>
        <div class="col-md-6 justify-content-center pt-3 pb-3">
          <div class="footerNav " v-for="page in pages" :key="page.index">
            <router-link :to="page.link">{{ page.text }}</router-link>
            {{ sign }}
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          link: "/",
          text: "Home"
        },
        {
          link: "/about",
          text: "About"
        },
        {
          link: "/work",
          text: "Work"
        },
        {
          link: "/contact",
          text: "Contact"
        }
      ],
      sign: "/"
    };
  }

  /* methods: {
    remove(sign){
      this.$delete(sign, -1);
    }
    }*/
};
</script>

<style>
.upd {
  background-color: rgb(233, 233, 233);
}
.upf {
  background-color: rgb(32, 31, 31);
}
.footerNav {
  display: inline;
  color: grey;
  text-decoration: none;
}
.footerNav a {
  color: grey;
}
.footerNav a:hover {
  color: green;
}
.footerLijeva {
  padding: 20px 20px 20px 20px;
  float: left;
  color: grey;
}
</style>
