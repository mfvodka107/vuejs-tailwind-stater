<template>
  <div id="home" class="container">
    <div class="">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <!-- game logo -->
    <p class="m-auto">This is home</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "home",
  components: {},
  mounted: function() {

  },
  computed: {
    ...mapState({})
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([])
  }
};
</script>

<style lang="scss">
@import url("../themes/home.scss");
</style>
