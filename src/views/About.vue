<template>
  <div>
    <navBar />
    <underNav />
    <div class="container" style="margin-bottom:60px">
      <div class="row justify-content-end pt-3 pb-3">
        <div class="col-lg-5 pb-4">
          <img
            src="@/assets/about-assets/aboutImg.png"
            class="align-self-center"
            width="100%"
          />
        </div>
        <div class="col-lg-7 mt-0 mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ipsum, dapibus vitae lectus sed, pretium feugiat elit. Integer
            id porta mi. Morbi dignissim lorem metus, eget varius magna tempus
            sit amet. Mauris ornare tempus hendrerit. Donec ligula tortor,
            lobortis et justo eget, tincidunt tristique ipsum. Sed sit amet
            justo in lacus fermentum elementum. Mauris dictum eget magna ac
            ultricies. Sed sit amet justo in lacus fermentum elementum. Mauris
            dictum eget magna ac ultricies.
          </p>

          <p>
            Nulla blandit dui mauris, in ultrices eros dignissim a. Pellentesque
            cursus justo ipsum, eget gravida neque suscipit non. Nunc sed
            aliquet est. Fusce sed finibus ligula. Donec viverra purus ut felis
            laoreet, tempus dictum massa fermentum. Integer aliquet, lorem vitae
            consectetur mattis, tellus massa maximus arcu, non imperdiet quam
            leo sed sapien. Phasellus vitae ante tellus. Mauris dictum eget
            magna ac ultricies. Mauris dictum eget magna ac ultricies.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h6>MISSION STATEMENT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ipsum, dapibus vitae lectus sed, pretium feugiat elit. Integer
            id porta mi. Morbi dignissim lorem metus, eget varius magna tempus
            sit amet. Mauris ornare tempus hendrerit. Donec ligula tortor,
            lobortis et justo eget, tincidunt tristique ipsum. Sed sit amet
            justo in lacus fermentum elementum. Mauris dictum eget magna ac
            ultricies.
          </p>
        </div>
        <div class="col-lg-6">
          <h6>FUN FACTS</h6>
          <p>
            Nulla blandit dui mauris, in ultrices eros dignissim a. Pellentesque
            cursus justo ipsum, eget gravida neque suscipit non. Nunc sed
            aliquet est. Fusce sed finibus ligula. Donec viverra purus ut felis
            laoreet, tempus dictum massa fermentum. Integer aliquet, lorem vitae
            consectetur mattis, tellus massa maximus arcu, non imperdiet quam
            leo sed sapien. Phasellus vitae ante tellus.
          </p>
        </div>
      </div>
    </div>
    <Tabs />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import underNav from "@/components/underNav.vue";
import Tabs from "@/components/Tabs.vue";
export default {
  components: {
    navBar,
    underNav,
    Tabs
  }
};
</script>
