<template>
  <div>
    <div class="container mb-3">
      <div class="row  mt-3 ">
        
        <h5><a v-on:click="filter('all')"> All </a>/</h5>
        <h5><a v-on:click="filter('print')"> Print </a>/</h5>
        <h5><a v-on:click="filter('photography')"> Photography </a>/</h5>
        <h5><a v-on:click="filter('web')"> Web </a>/</h5>
        <h5><a v-on:click="filter('application')"> Application </a></h5>

        <button class="button " v-on:click="switchView()" >
          <span>{{ buttonSwitchViewText }}</span>
        </button>

        <img  v-on:click="switchView()" :src="buttonSwitchViewText" alt="">
      </div>

      <!-- GridView structure -->
      <div v-if="isGridView" class="row">
        <div class="col-lg-4" v-for="todo in filteredItems" :key="todo.id">
          <img
            :src="todo.imgUrl"
            width="300px"
            height="220px"
            class="mt-3"
            alt="work"
          />
        </div>
      </div>
      <!-- ListView structure -->
      <div v-if="!isGridView" class="row">
        <div class="col-lg-12 " v-for="todo in filteredItems" :key="todo.id">
          <img
            :src="todo.imgUrl"
            width="300px"
            height="220px"
            class="mt-3"
            alt="work"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      todos: [],
      currentTag: "all",
      buttonSwitchViewText: "link.png",
      isGridView: true
    };
  },
  components: {
    Footer
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/todos`);

      this.todos = res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.todos.filter(function(todo) {
        return todo.category.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    filter: function(tag) {
      this.currentTag = tag;
    },

    switchView: function() {
      if (this.isGridView) {
        this.buttonSwitchViewText = "link.png";
      } else {
        this.buttonSwitchViewText = "link.png";
      }

      this.isGridView = !this.isGridView;
    }
  }
};
</script>

<style scope>
a:not([href]):hover {
  color: green;
  cursor: url("http://www.touristiko.me/test/cursor.png"), auto;
}
img:hover {
  opacity: 0.7;
}
</style>
