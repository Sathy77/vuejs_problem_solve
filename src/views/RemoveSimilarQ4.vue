<template>
    <div class="q4">
        <h1>let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]</h1>
        <h1>Q4. Remove similar numbers from $numbers</h1>

        <table class="customers">
        <tr><th>Serial Number</th><th>With Similar Number</th><th>Remove similar Number</th></tr>
        
        <tr>
            <td>{{1}}</td>
            <td>{{number.join(" ")}}</td>
            <td>{{removeSimilar.join(" ")}}</td>
            
        </tr>
        </table>

    </div>
</template>

<script>
    export default{
        name: 'RemoveSimilarQ4',
        data(){
            return{
                number: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
            }
        },
        computed: {
            removeSimilar(){
                // return this.number.filter((eachNumber, index) => this.number.indexOf(eachNumber) == index)
                return this.number.filter(function(eachNumber, index, arr){
                    return arr.indexOf(eachNumber) == index 
                })
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