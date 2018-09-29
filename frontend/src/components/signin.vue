<template>
    <form novalidate @submit.prevent="do_authenticate(username, password)">
        <md-card>
            <md-card-header>
                <div class="md-title">Choose an account to sign in</div>
            </md-card-header>

            <md-list class="md-siz-60">
                <md-list-item>
                    <md-button class="md-raised md-primary" @click="login('aaaaa')">Student</md-button>
                </md-list-item>
                <md-list-item>
                    <md-button class="md-raised md-primary" @click="login('bbbbb')">Mentor</md-button>
                </md-list-item>
                <md-list-item>
                    <md-button class="md-raised md-primary" @click="login('ccccc')">CLC Admin</md-button>
                </md-list-item>
            </md-list>                   
        </md-card>
    </form>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../js/store.js";
export default {
  name: "app-signin",
  computed: {
    ...mapState({ error: "last_error" }),
    ...mapGetters(["is_loading"])
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations(["UPDATE_ERROR"]),
    ...mapActions(["authenticate"]),
    login(wallet){
        console.log("Login: " + wallet);
        this.$router.push({ name: "content"});
    },
    beforeRouteEnter(to, from, next) {
        if (store.getters.signed_in) {
        next({ name: "content" });
        return;
        }
        next();
    }
  }
};
</script>
