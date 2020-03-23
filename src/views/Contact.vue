<template>
  <div>
    <navBar />
    <div class="margin-container">
      <underNav />
      <!--MAPS -->
      <div class="container-fluid">
        <div class="row" style="padding-bottom: 50px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"
            width="100%"
            height="420"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!--Contact-->

      <div class="container">
        <h3 class="text-left">CONTACT FORM</h3>
        <br />

        <div class="row text-left">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eros ipsum, dapibus vitae lectus sed, pretium feugiat
              elit. Integer id porta mi.
            </p>
            <form @submit.prevent="submit">
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.name.$error }"
              >
                <input
                  id="size"
                  class="form-control"
                  v-model.trim="name"
                  @input="setName($event.target.value)"
                  name="name"
                  placeholder="Name..."
                />
              </div>
              <template v-if="$v.name.$error">
                <div class="error" v-if="!$v.name.required">
                  Field is required
                </div></template
              >
              <br />
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.email.$error }"
              >
                <input
                  id="size"
                  class="form-control"
                  v-model.trim="email"
                  @input="setEmail($event.target.value)"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <template v-if="$v.email.$error">
                <div class="error" v-if="!$v.email.required">
                  This field is required
                </div>
                <div class="error" v-if="!$v.email.email">
                  That's not a valid email
                </div>
              </template>
              <br />
              <div class="form-group">
                <input
                  id="size"
                  class="form-control"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <br />

              <div
                class="form-group"
                :class="{ 'form-group--error': $v.text.$error }"
              >
                <textarea
                  id="size1"
                  class="form-control"
                  v-model.trim="text"
                  @input="setText($event.target.value)"
                  name="text"
                  style="height:150px;"
                ></textarea>
              </div>
              <template v-if="$v.text.$error">
                <div class="error" v-if="!$v.text.required">
                  Field is required
                </div>
                <div class="error" v-if="!$v.text.maxLength">
                  Text must have at max
                  {{ $v.text.$params.maxLength.max }} letters.
                </div>
              </template>
              <br />

              <button
                class="btn btn-success"
                type="submit"
                :disabled="submitStatus === 'PENDING'"
              >
                Submit!
              </button>
              <p class="typo__p" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="typo__p" v-if="submitStatus === 'ERROR'">
                Please fill the form correctly.
              </p>
              <p class="typo__p" v-if="submitStatus === 'PENDING'">
                Sending...
              </p>

              <br />
              <br />
            </form>
          </div>
          <div class="col-lg-4">
            <b>CONTACT INFO:</b>
            <br />
            <br />Company Inc, <br />Las vegas street 201 <br />55001 Nevada,
            USA <br />Phone: +1 145 000 101
            <br />
            <a href="mailto:usa@mysite.com">usa@mysite.com</a>
            <br />
            <br />
            <br />
            <b>STORE HOURS:</b>
            <br />
            <br />Phone: +1 129 209 291 <br />E-mail:
            <a href="mailto:support@mysite.com">support@mysite.com</a>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import underNav from "@/components/underNav.vue";
import Footer from "@/components/Footer.vue";

import { required, maxLength,email } from "vuelidate/lib/validators";

export default {
  components: {
    navBar,
    underNav,
    Footer
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      text: "",
      submitStatus: null
    };
  },
  validations: {
    name: { required },
    email: { required,email },
    text: {
      required,
      maxLength: maxLength(1000)
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.margin-container {
  margin-bottom: 60px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
