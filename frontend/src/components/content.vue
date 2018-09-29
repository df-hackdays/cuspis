<template>
    <md-tabs md-sync-route>
      <md-tab id="tab-history" md-label="History" to="/content/tabs/history">
            <history />
      </md-tab>
      <md-tab id="tab-host" md-label="Host Class" to="/content/tabs/host">
            <course-create />
      </md-tab>
      <md-tab id="tab-attend" md-label="Attend Class" to="/content/tabs/attend">
            <attend-course />
      </md-tab>
      <md-tab id="tab-store" md-label="Store" to="/content/tabs/store">
        <store />
      </md-tab>
      <md-tab id="tab-career" md-label="Career Path" to="/content/tabs/career">
            <career-path />
      </md-tab>
      <md-tab id="tab-admin" md-label="admin" to="/content/tabs/admin">
            <clc-viewer />
      </md-tab>
    </md-tabs>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CourseCreate from "./course-create.vue";
import AttendCourse from "./attend-course.vue";
import CLCViewer from "./clc-viewer.vue";
import CareerPath from "./wow-board.vue";
import HistoryView from "./history.vue";
import Store from "./store.vue";
export default {
  name: "app-content",
  components: {
    "course-create": CourseCreate,
    "attend-course": AttendCourse,
    "clc-viewer": CLCViewer,
    "career-path": CareerPath,
    "history": HistoryView,
    "store": Store
  },
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
