<template>
    <div class="DescendingRatingQ11">
        <h1>link : https://notepad.pw/WGkW3s9D6N3Iz3KzPAX0</h1>
        <h1>Q11. Arrange the products from the highest average rating to the lowest.</h1>

        <table class="customers">
        <tr><th>Serial Number</th><th>Phone Name</th><th>Phone Price</th><th>Phone Brand</th><th>Rating</th></tr>
        
        <tr v-for="(phone, index) in assendingPrice" :key="index">
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{phone.price}}</td>
            <td>{{phone.brand}}</td>
            <td>{{phone.rating.average}}</td>
        </tr>

      </table>
    </div>
</template>

<script>
    import mobile from '@/assets/JsonFile/phone.json'
    export default{
        name: 'DescendingRatingQ11',
        data(){
            return{
                mobileArray: JSON.parse(JSON.stringify(mobile))
            }
        },
        computed:{
            assendingPrice(){
                return this.mobileArray.sort(function(a,b){return b.rating.average-a.rating.average})
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