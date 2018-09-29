<template>
    <md-card>
        <md-card-content>
            <md-button class="md-primary" @click="clickNumber">
                <span>Get Thing</span>
        </md-button>

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
  name: "storage-content",
  mixins: [AuthorizedMixin],
  mounted() {
    console.log("dispatching getContractInstance");
    this.$store.dispatch("getContractInstance");
  },
  data() {
    return {
      amount: null,
      pending: false,
      winEvent: null
    };
  },
  methods: {
    clickNumber(event) {
      console.log(event.target.innerHTML, this.amount);
      this.winEvent = null;
      this.pending = true;
      let addedEvent = this.$store.state.contractInstance().addContentEvent();
      addedEvent.watch((err, result) => {
        if (err) {
          console.log("could not get event Won()");
        } else {
          this.winEvent = result.args;
          this.pending = false;
        }
      });

      let addedContent = this.$store.state.contractInstance().addContent(
        "111",
        1,
        "1111",
        {
          gas: 300000,
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log(err);
            this.pending = false;
          } else {
            console.log(result);
          }
        }
      );
    },
    getContent(event) {
      this.winEvent = null;
      let addedContent = this.$store.state.contractInstance().getStorage(this.$store.state.web3.coinbase,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result[0].toNumber());
          }
        }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
