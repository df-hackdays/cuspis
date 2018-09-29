<template>
    <md-card>
        <md-card-content>

        <md-button class="md-primary" @click="getContent">
                <span>Get Contnet</span>
        </md-button>

        <div class="event" v-if="winEvent">
                Won: {{ winEvent }}
        </div>
        </md-card-content>

    </md-card>
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
      amount: null,
      pending: false,
      winEvent: null
    };
  },
  methods: {
    getContent(event) {
      this.winEvent = null;
      let addedContent = this.$store.state.tokenContractInstance().balanceOf(this.$store.state.web3.coinbase,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result.toNumber());
          }
        }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
