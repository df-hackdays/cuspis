<template>
  <div>
<!--
       <md-field class="md-small-size-50">
          <label for="user">Select a User</label>
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
-->
        <md-card>
            <md-card-header>
                <div class="md-title">User Segmentation</div>
            </md-card-header>
            <md-card-content>
                <img :src=seg1 class="cluster1">
            </md-card-content>
        </md-card>
  </div>
</template>

<script>

import seg1 from "../img/cluster1.png";
export default {
  name: "clc-viewer",
  data: () => ({
    user: "alice",
    course: null,
    seg1
  })
};
</script>
<style>
.cluster1{
    width:800px !important;
    height:400px !important;
}
</style>