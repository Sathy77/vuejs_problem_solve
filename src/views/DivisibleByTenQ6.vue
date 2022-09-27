<template>
    <div class="DivisibleByTenQ6">
        <h1>let $numbers2 = {{number}}</h1>
        <h1>Q6. Return numbers in $numbers divisible by 10.</h1>

        <table class="customers">
        <tr><th>Serial Number</th><th>With Nagative Number</th><th>Remove Negative Number</th></tr>
        
        <tr>
            <td>{{1}}</td>
            <td>{{number.join(" ")}}</td>
            <td>{{DivisibleByTen.join(" ")}}</td>
            
        </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'DivisibleByTenQ6',
        data(){
            return{
                number: [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]
            }

        }, 
        computed: {
            DivisibleByTen(){
                return this.number.filter(eachNumber => eachNumber%10==0)
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