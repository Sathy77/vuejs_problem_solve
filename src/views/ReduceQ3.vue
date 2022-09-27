<template>
    <div class="ReduceQ3">
        <h1>let $numbers = {{number}}</h1>
        <h1>Q3. Calculate the sum of numbers within $numbers (reduce method)</h1>

        
        <table class="customers">
        <tr><th>Serial Number</th><th>Number</th><th>Sum (Reduce method)</th></tr>
        
        <tr>
            <td>{{1}}</td>
            <td>{{number.join(" ")}}</td>
            <!-- <td style="display:flex;flex-direction: row;justify-content: center;">
                <p v-for="eachNumber in number" :key="eachNumber">
                    {{eachNumber.toString()}}
                </p>
            </td> -->
            <td>{{sumNumber}}</td>
            
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
        name: 'ReduceQ3',
        data(){
            return {
                number: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
                copyNumber: [],
            }
        },
        computed:{
            sumNumber(){
                this.copyNumber = [...this.number]
                let initialValue=0 
                return this.copyNumber.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
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