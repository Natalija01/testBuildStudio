<template>
  <div class="margin-container">
    <div class="container-fluid" style="background-color: rgb(206, 209, 206)">
      <div class="container">
        <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
          <li class="nav-item col-lg-3">
            <a
              class="nav-link active"
              id="pills-web-tab"
              data-toggle="pill"
              href="#pills-web"
              role="tab"
              aria-controls="pills-web"
              aria-selected="true"
            >
              <img
                style="padding-bottom: 10px"
                src="@/assets/about-assets/website.png"
              />
              <br />
              <b class="icon-title">WEBSITES</b>
            </a>
          </li>
          <li class="nav-item col-lg-3">
            <a
              class="nav-link"
              id="pills-photo-tab"
              data-toggle="pill"
              href="#pills-photo"
              role="tab"
              aria-controls="pills-photo"
              aria-selected="false"
            >
              <img
                style="padding-bottom: 20px"
                src="@/assets/about-assets/photography.png"
              />
              <br />
              <b class="icon-title">PHOTOGRAPHY</b>
            </a>
          </li>
          <li class="nav-item col-lg-3">
            <a
              class="nav-link"
              id="pills-seo-tab"
              data-toggle="pill"
              href="#pills-seo"
              role="tab"
              aria-controls="pills-seo"
              aria-selected="false"
            >
              <img
                style="padding-bottom: 20px;"
                src="@/assets/about-assets/seo.png"
              />
              <br />
              <b class="icon-title">SEO</b>
            </a>
          </li>
          <li class="nav-item col-lg-3">
            <a
              class="nav-link"
              id="pills-app-tab"
              data-toggle="pill"
              href="#pills-app"
              role="tab"
              aria-controls="pills-app"
              aria-selected="false"
            >
              <img
                style="padding-bottom:20px;"
                src="@/assets/about-assets/application.png"
              />
              <br />
              <b class="icon-title">APPLICATION</b>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid" style="background-color: white">
      <div class="container">
        <div class="row text-left">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-web"
              role="tabpanel"
              aria-labelledby="pills-web-tab"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eros ipsum, dapibus vitae lectus sed, pretium feugiat
                elit. Integer id porta mi. Morbi dignissim lorem metus, eget
                varius magna tempus sit amet. Mauris ornare tempus hendrerit.
                Donec ligula tortor, lobortis et justo eget, tincidunt tristique
                ipsum:
              </p>

              <ul>
                <li>tincidunt tristique ipsum</li>
                <li>tincidunt tristique ipsum</li>
                <li>tincidunt tristique ipsum</li>
                <li>tincidunt tristique ipsum</li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="pills-photo"
              role="tabpanel"
              aria-labelledby="pills-photo-tab"
            >
              Sed sit amet justo in lacus fermentum elementum. Mauris dictum
              eget magna ac ultricies.
              <ul>
                <li>lobortis et justo eget</li>
                <li>tincidunt tristique ipsum</li>
                <li>tincidunt tristique ipsum</li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="pills-seo"
              role="tabpanel"
              aria-labelledby="pills-seo-tab"
            >
              222.
            </div>
            <div
              class="tab-pane fade"
              id="pills-app"
              role="tabpanel"
              aria-labelledby="pills-app-tab"
            >
              44.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.margin-container {
  margin-bottom: 60px;
}
.nav-pills .nav-item {
  padding: 0;
  margin: 0;
}
.nav-pills .nav-item .nav-link {
  padding-top: 50px;
  padding-bottom: 0;
  margin-bottom: 0;
}
.nav-pills .nav-item:hover {
  background-color: #dadada;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #737373;
  background-color: black;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.nav-pills .nav-item .nav-link.active {
  background-color: #dadada; /* ACTIVE TAB */
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 0px;
}
.nav-pills .nav-link {
  color: #737373;
  padding-bottom: 0px;
}
</style>
