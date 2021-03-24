<template>
  <div class="home">
    <img alt="jQuery logo" src="public/images/jquery-logo.png" />
    <jQueryRefresher />
  </div>
</template>

<script>
// @ is an alias to /src
import jQueryRefresher from "../components/jQueryRefresher.vue";

export default {
  name: "Home",
  components: {
    jQueryRefresher,
  },
};
</script>
