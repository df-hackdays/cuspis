<template>
    <div id="root" class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary md-dense">
                <router-link class="md-title" to="/">Cuspis - Earn as you learn!!!</router-link>

                <token-content />

                <div>
                    <md-menu md-direction="bottom-start">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>more_vert</md-icon>
                        </md-button>

                        <md-menu-content>
                            <md-menu-item @click="do_signout">Sign Out</md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </div>
            </md-app-toolbar>

            <md-app-content id="content">
                <router-view></router-view>
            </md-app-content>
        </md-app>

        <md-dialog-alert
            id="dialog-alert"
            :md-active="show_dialog"
            @update:mdActive="UPDATE_ERROR(null)"
            md-title="Error"
            :md-content="error"
            :md-click-outside-to-close="false"
            ></md-dialog-alert>

        <md-snackbar
            :md-active="current_feedback != null"
            @update:mdActive="clear_feedback"
            md-persistent
            >
            <span>{{current_feedback}}</span>
        </md-snackbar>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import TokenContent from './token-content.vue';
export default {
  name: "my-app",
  components: {
      'token-content': TokenContent
  },
  beforeCreate() {
    console.log("registerWeb3 Action dispatched from casino-dapp.vue");
    this.$store.dispatch("registerWeb3");
  },
  computed: {
    ...mapState(["username"]),
    ...mapState({ error: "last_error" }),
    ...mapGetters(["signed_in", "current_feedback", "dashboard_route"]),
    ...mapGetters({ show_dialog_state: "show_dialog" }),
    show_dialog() {
      return this.$route.name !== "home" && this.show_dialog_state;
    }
  },
  methods: {
    ...mapMutations(["UPDATE_ERROR"]),
    ...mapActions(["clear_feedback", "signout"]),
    async do_signout() {
      await this.signout();
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="stylus">
#root, &>.md-app {
    min-height: 100vh;
}

#dialog-alert {
    z-index: 999;
}

.md-toolbar .md-title {
    flex: 1;

    &:hover {
        text-decoration: none;
        font-weight: 500;
    }
}

#content {
    background-color: inherit;

    > div, form {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
