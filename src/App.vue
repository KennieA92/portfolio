
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#toplevel-wrapper {
  padding: 0; /* Added */
  box-sizing: border-box;
}

nav {
  min-height: 10vh;
  padding: 30px;
  background-color: $primary-color;
  a {
    font-weight: bold;
    color: $secondary-color;
    &.router-link-exact-active {
      color: $tertiary-color;
    }
  }
}
</style>
