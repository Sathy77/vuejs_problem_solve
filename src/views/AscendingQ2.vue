<template>
    <div class="assending">
        <h1>let $numbers = {{number}}</h1>
        <h1>Q2. Arrange $numbers in ascending order.</h1>

        
        <table class="customers">
        <tr><th>Serial Number</th><th>Number</th><th>Assending Number</th></tr>
        
        <tr v-for="(eachNumber, index) in assendingNumber" :key="index">
            <td>{{index+1}}</td>
            <td>{{number[index]}}</td>
            <td>{{eachNumber}}</td>
            
        </tr>

        <!-- <tr v-if="index%2==0" v-for="(eachNumber, index) in assendingNumber" :key="index">
            <td>{{index}}</td>
            <td>{{number[index]}}</td>
            <td>{{eachNumber}}</td>
            
        </tr> -->

          

      </table>

    </div>
</template>

<script>
    export default{
        name: 'AscendingQ2',
        data(){
            return {
                number: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
                copyNumber: [],
            }
        },
        computed:{
            assendingNumber(){
                this.copyNumber = [...this.number]
                return this.copyNumber.sort(function(a,b){return a-b})
            },

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