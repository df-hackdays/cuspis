<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateCourse">
      <md-card class="md-layout-item md-size-50 md-small-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-100">
        <md-card-header>
          <div class="md-title">Create Course</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name">Name</label>
                <md-input name="name" id="name" autocomplete="name" v-model="form.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.name.required">Name is required</span>
              </md-field>
            </div>
          </div>
          
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100  md-medium-size-100 md-large-size-100 md-xlarge-size-100">
              <md-field :class="getValidationClass('learnerType')">
                <label for="learning-type">Learner Type</label>
                <md-select v-model="form.learnerType" name="learning-type" id="learning-type">
                  <md-option value="adult">Adult</md-option>
                  <md-option value="child">Child</md-option>
                  <md-option value="youth">Youth</md-option>
                  <md-option value="teacher">Teacher</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.learnerType.required">The learner type is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-100">
              <md-field :class="getValidationClass('courseRewards')">
                <label for="courseRewards">Course Rewards</label>
                <md-input name="course-rewards" id="course-rewards" autocomplete="courseRewards" 
                v-model="form.courseRewards" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.courseRewards.required">The course rewards are required</span>
              </md-field>
            </div>
          </div>

          <div>
              <span class="md-title" v-if="courseCode">Your reference code : {{ courseCode }}</span>
          </div>
          <div id="qrcode"></div>
          </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create Course</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="courseSaved">The course {{ lastCourse }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required
} from "vuelidate/lib/validators";
import { accounts } from "./../constants/accounts";

export default {
  name: "course-create",
  mixins: [validationMixin],
  mounted() {
    console.log("dispatching getContractInstance");
    this.$store.dispatch("getTokenContractInstance");
  },
  data: () => ({
    form: {
      name: null,
      learnerType: null,
      courseRewards: null
    },
    courseSaved: false,
    sending: false,
    lastCourse: null,
    courseCode: null
  }),
  validations: {
    form: {
      name: {
        required
      },
      learnerType: {
        required
      },
      courseRewards: {
        required
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.name = null;
      this.form.learnerType = null;
      this.form.courseRewards = null;
    },
    saveCourse() {
      this.sending = true;

      let addedEvent = this.$store.state.tokenContractInstance().Approval();
      addedEvent.watch((err, result) => {
        if (err) {
          console.log("could not get event Approval()");
        } else {
          this.lastCourse = `${this.form.name}`;
          this.courseSaved = true;
          this.sending = false;
          this.courseCode = Math.floor(Math.random() * 1000000);
          this.generateQrCode(this.courseCode);
        }
      });

      console.log(this.courseRewards);

      let approve = this.$store.state.tokenContractInstance().approve(
        accounts[1],
        30,
        {
          gas: 300000,
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );
    },
    generateQrCode(code){
      try{
        $("#qrcode").qrcode("" + code);
      }catch(e){
        console.log(e);
      }
    },
    validateCourse() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveCourse();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
