<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-vertical md-linear>
      <md-step id="first" md-label="First Step - Developer (Avg. $60,000)" md-description="Lets get started" :md-editable="false" :md-done.sync="first">
        <p>Since you have choosen programming as your interest, first step is to attend Java Programming workshop</p>
        <p>Here are some upcoming sessions you can attend : </p>
        <p>1. Java Level 1 - 2018-10-10</p>
        <p>2. Java Level 2 - 2018-10-20</p>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Track Progress</md-button>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Feedback</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step - Senior Developer (Avg. $90,000)" :md-editable="false" :md-done.sync="second">
        <p>1. Big Data Analytics</p>
        <p>2. Machine Learning/Neural Networks</p>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
      </md-step>

      <md-step id="third" md-label="Third Step - Solution Architect (Avg. $120,000)" :md-editable="false" :md-done.sync="third">
        <p>1. Microserive Architecture</p>
        <p>2. Azure/Google Cloud/Amazon Certification</p>
        <md-button class="md-raised md-primary" @click="setDone('third', 'first')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'wow-board',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-steppers {

  }
</style>
