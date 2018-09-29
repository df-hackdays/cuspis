<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
        <md-field :class="getValidationClass('coursecode')">
            <label for="coursecode">Course Code</label>
            <md-input type="coursecode" name="coursecode" id="coursecode" autocomplete="coursecode" v-model="form.coursecode" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.coursecode.required">The course code is required</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Attend Event</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved" md-persistent>The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { accounts } from "./../constants/accounts";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "attend-course",
  mixins: [validationMixin],
  data: () => ({
    form: {
      coursecode: null
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      coursecode: {
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
      this.form.coursecode = null;
    },
    saveUser() {
      this.sending = true;

      let addedEvent = this.$store.state.tokenContractInstance().Transfer();
      addedEvent.watch((err, result) => {
        if (err) {
          console.log("could not get event Approval()");
        } else {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
          this.userSaved = true;
          this.sending = false;
          this.$router.push('/content');
        }
      });

      let transferFrom = this.$store.state.tokenContractInstance().transferFrom(
        accounts[0],
        this.$store.state.web3.coinbase,
        20,
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
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
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
