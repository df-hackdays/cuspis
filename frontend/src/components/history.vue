<template>
    <md-table>
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Course/Event Name</md-table-head>
                <md-table-head>Date</md-table-head>
            </md-table-row>

            <md-table-row>
                <md-table-cell md-numeric>1</md-table-cell>
                <md-table-cell>Course</md-table-cell>
                <md-table-cell>Java Programming Level 1</md-table-cell>
                <md-table-cell>2017-04-29</md-table-cell>
                <md-table-cell>
                    <md-button class="md-raised md-primary">Get Certificate</md-button>
                </md-table-cell>
            </md-table-row>

             <md-table-row>
                <md-table-cell md-numeric>2</md-table-cell>
                <md-table-cell>Course</md-table-cell>
                <md-table-cell>Java Programming Level 2</md-table-cell>
                <md-table-cell>2017-09-10</md-table-cell>
                <md-table-cell>
                    <md-button class="md-raised md-primary">Get Certificate</md-button>
                </md-table-cell>
            </md-table-row>
             <md-table-row>
                <md-table-cell md-numeric>3</md-table-cell>
                <md-table-cell>Achievement</md-table-cell>
                <md-table-cell>Certified Java Developer</md-table-cell>
                <md-table-cell>2018-09-28</md-table-cell>
            </md-table-row>
             <md-table-row>
                <md-table-cell md-numeric>4</md-table-cell>
                <md-table-cell>Event</md-table-cell>
                <md-table-cell>DF Hackdays</md-table-cell>
                <md-table-cell>2018-09-28</md-table-cell>
            </md-table-row>
             <md-table-row>
                <md-table-cell md-numeric>5</md-table-cell>
                <md-table-cell>Achievement</md-table-cell>
                <md-table-cell>DF Hackday Participation</md-table-cell>
                <md-table-cell>2018-09-28</md-table-cell>
            </md-table-row>
        </md-table>
</template>

<script>
export default {
  name: "history"
};
</script>