<template>
    <md-menu>
          <md-button class="md-icon-button" md-menu-trigger @click="getContent">
              <md-icon>face</md-icon>
          </md-button>

          <md-menu-content>
              <md-menu-item>
              <md-icon>card_giftcard</md-icon>
              <span>Rewards {{ winEvent }}</span>
              </md-menu-item>
          </md-menu-content>
      </md-menu>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AuthorizedMixin from "./authorized-mixin.js";
export default {
  name: "token-content",
  mixins: [AuthorizedMixin],
  mounted() {
    console.log("dispatching getContractInstance");
    this.$store.dispatch("getTokenContractInstance");
  },
  data() {
    return {
      rewards: this.$store.state.rewards,
      winEvent: null
    };
  },
  methods: {
    getContent(event) {
      this.winEvent = null;
      let addedContent = this.$store.state
        .tokenContractInstance()
        .balanceOf(this.$store.state.web3.coinbase, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result.toNumber());
            console.log(this.$store.state.web3);
            this.winEvent = result.toNumber();
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
