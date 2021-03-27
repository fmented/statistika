<template>
<div class="base">
    <h3>Frequency Table</h3>
    <div class="table-container">
  <table class="table">
      <thead>
          <tr>
              <th>Class</th>
              <th>Interval</th>
              <th>Fi</th>
              <th>Fi_C</th>
              <th>Xi</th>
              <th>FiXi</th>
              <th>Xi<sup>2</sup></th>
              <th>FiXi<sup>2</sup></th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(val, i) in data" :key="i">
              <td>{{i+1}}</td>
              <td>{{val.interval}}</td>
              <td v-if="i==hifi_index"><b>{{val.fi}}</b></td>
              <td v-else>{{val.fi}}</td>
              <td v-if="i==hifi_index-1"><b>{{val.fc}}</b></td>
              <td v-else>{{val.fc}}</td>
              <td>{{val.xi}}</td>
              <td>{{val.fixi}}</td>
              <td>{{val.xi2}}</td>
              <td>{{val.fixi2}}</td>
          </tr>
          <tr>
                <td colspan="2"><b>Count</b></td>
                <td><b>{{fi_sum}}</b></td>
                <td colspan="2"></td>
                <td><b>{{fixi_sum}}</b></td>
                <td></td>
                <td><b>{{fixi2_sum}}</b></td>
          </tr>
      </tbody>
  </table>
  </div>
  </div>
</template>

<script>
export default {
    props:['data','fi_sum','fixi_sum','fixi2_sum','hifi_index']

}
</script>

<style>

.base{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

.table-container{
    overflow-x: auto;
}
.table{
    
    border-collapse: collapse;
    margin: 25px 0;
    font-size: .9em;
    min-width: 100%;
    box-shadow: 0 0 20px rgba(0,0,0,.15);
    
}

.table thead tr{
    background-color: #008978;
    color: #ffff;
    text-align: center;
}

.table th, .table td{
    padding: 12px 15px;
}

.table tbody tr{
    border-bottom: 1px solid #dddd;
}

.table tbody tr:nth-of-type(even){
    background-color: #f2f2f2;
}

.table tbody tr:last-of-type{
    border-bottom: 2px solid #008978;
}
</style>