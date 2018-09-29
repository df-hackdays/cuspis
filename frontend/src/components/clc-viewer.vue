<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Rewards">
        <md-field>
          <label for="user">User</label>
          <md-select v-model="user" name="user" id="user">
            <md-option value="alice">Alice</md-option>
            <md-option value="bob">Bob</md-option>
          </md-select>
        </md-field>

        <md-table v-if="user === 'alice'">
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Gender</md-table-head>
                <md-table-head>Job Title</md-table-head>
            </md-table-row>

            <md-table-row>
                <md-table-cell md-numeric>1</md-table-cell>
                <md-table-cell>Vera Taleworth</md-table-cell>
                <md-table-cell>vtaleworth2@google.ca</md-table-cell>
                <md-table-cell>Male</md-table-cell>
                <md-table-cell>Community Outreach Specialist</md-table-cell>
            </md-table-row>
        </md-table>
        <md-table v-if="user === 'bob'">
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Gender</md-table-head>
                <md-table-head>Job Title</md-table-head>
            </md-table-row>

            <md-table-row>
                <md-table-cell md-numeric>1</md-table-cell>
                <md-table-cell>Shawna Dubbin</md-table-cell>
                <md-table-cell>sdubbin0@geocities.com</md-table-cell>
                <md-table-cell>Male</md-table-cell>
                <md-table-cell>Assistant Media Planner</md-table-cell>
            </md-table-row>
        </md-table>
      </md-tab>

      <md-tab id="tab-courses" md-label="Courses">
        <md-field>
          <label for="course">Course</label>
          <md-select v-model="course" name="course" id="course">
            <md-option value="java">Java Programming</md-option>
            <md-option value="photoshop">Adobe Photoshop</md-option>
          </md-select>
        </md-field>

        <md-table v-if="course === 'java'">
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Gender</md-table-head>
                <md-table-head>Job Title</md-table-head>
            </md-table-row>

            <md-table-row>
                <md-table-cell md-numeric>1</md-table-cell>
                <md-table-cell>Vera Taleworth</md-table-cell>
                <md-table-cell>vtaleworth2@google.ca</md-table-cell>
                <md-table-cell>Male</md-table-cell>
                <md-table-cell>Community Outreach Specialist</md-table-cell>
            </md-table-row>
        </md-table>
        <md-table v-if="course === 'photoshop'">
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Gender</md-table-head>
                <md-table-head>Job Title</md-table-head>
            </md-table-row>

            <md-table-row>
                <md-table-cell md-numeric>1</md-table-cell>
                <md-table-cell>Shawna Dubbin</md-table-cell>
                <md-table-cell>sdubbin0@geocities.com</md-table-cell>
                <md-table-cell>Male</md-table-cell>
                <md-table-cell>Assistant Media Planner</md-table-cell>
            </md-table-row>
        </md-table>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "clc-viewer",
  data: () => ({
    user: null,
    course: null
  })
};
</script>
