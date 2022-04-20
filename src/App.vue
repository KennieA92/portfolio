
  <template>
  <div
    id="toplevel-wrapper"
    class="container-fluid d-flex min-vh-100 flex-column"
  >
    <NavigationComponent />
    <router-view />
  </div>
</template>


<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
export default {
  components: {
    NavigationComponent,
  },
  setup() {},
};
</script>

<style lang="scss">
#app {
  font-family: "Orbitron", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-align: center;
  background: $primary-color;
  color: $text-color;
  #toplevel-wrapper {
    padding: 0; /* Added */
    box-sizing: border-box;
  }
}
/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $primary-color;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $secondary-color;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $tertiary-color;
}
</style>
