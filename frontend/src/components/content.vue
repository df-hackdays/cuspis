<template>
    
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "app-content",
  computed: {
    web3() {
      return this.$store.state.web3;
    },
    ...mapState(["username", "thing"]),
    ...mapGetters(["is_loading"])
  },
  methods: {
    ...mapActions(["get_thing"]),
    do_get_thing() {
      if (this.is_loading) {
        return;
      }
      this.get_thing();
    }
  }
};
</script>

<style lang="stylus" scoped>
    
</style>
