<template>
  <div class="container-fluid" style="background-color:#bbb;">
    <div class="container">
      <div class="row ">
        <div class="col-lg-5 align-self-center pt-3">
          <img
            id="yt_img"
            src="@/assets/home-assets/video-player-placeholder.jpg.png"
            width="100%"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          />

          <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-md">
              <div class="modal-content">
                <div class="resp-container">
                  <iframe
                    class="resp-iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8SbUC-UaAxE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 text-left py-3 ">
          <h2>Get to know us a little better</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consequat pharetra metus venenatis blandit. Integer vel eleifend
            enim. Aenean vitae leo et neque lobortis pellentesque. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; In id fermentum risus. Integer elementum a nisi et
            blandit.
          </p>
          <p>
            Mauris aliquet et quam eget scelerisque. Aenean fermentum augue
            libero, quis varius elit mollis non. Nunc tincidunt felis libero,
            quis posuere neque gravida ut. In mauris turpis, fermentum nec enim
            id, ultrices fermentum nisi. Morbi lobortis neque at purus mollis,
            vel bibendum lorem auctor. Vivamus pellentesque urna id tortor
            semper, et rutrum metus lacinia. Curabitur nisi mi, semper vel dui
            ultricies, vehicula dictum mi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
