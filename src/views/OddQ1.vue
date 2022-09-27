<template>
    <div class="odd">
      <h1>Q1: Print Odd numbers between 0 to 100.</h1>

      <table class="customers">
        <tr><th>Serial Number</th><th>Odd Number</th></tr>
        
        <tr v-for="(number, index) in oddNumber" :key="index">
            <td>{{index + 1}}</td>
            <td>{{number}}</td>
        </tr>

      </table>

    </div>
  </template>
  
  <script>
    export default{
        data(){
            return{
                oddNumber: (Array(101).fill(1).map((number,index)=> number*index).filter(each=> each % 2 !== 0))
            }
        } 

    }
    
  </script>

<style>
    .customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    .customers td, .customers th {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
    
    .customers tr:nth-child(even){background-color: #f2f2f2;}
    
    .customers tr:hover {background-color: #ddd;}
    
    .customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
      text-align: center;
    }
</style>