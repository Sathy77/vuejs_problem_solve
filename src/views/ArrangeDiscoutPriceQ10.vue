<template>
    <div class="ArrangeDiscoutPriceQ10">
        <h1>link : https://notepad.pw/WGkW3s9D6N3Iz3KzPAX0</h1>
        <h1>Q10. Arrange products from highest discounted_price to lowest.</h1>
    
        
        <table class="customers">
        <tr><th>Serial Number</th><th>Phone Name</th><th>Phone Price</th><th>Phone Brand</th><th>Rating</th><th>Discounted Price</th></tr>
        
        <tr v-for="(phone, index) in arrangeDiscountPrice" :key="index">         
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{phone.price}}</td>
            <td>{{phone.brand}}</td>
            <td>{{phone.rating.average}}</td>
            <td>{{phone.discounted_price}}</td>
        </tr>


      </table>
    </div>
</template>

<script>
    import mobile from '@/assets/JsonFile/phone.json'
    export default{
        name: 'ArrangeDiscoutPriceQ10',
        data(){
            return{
                mobileArray: JSON.parse(JSON.stringify(mobile)),
                copyMobileArray: []
            }
        },
        computed:{
            addDiscountedPrice(){
                return this.mobileArray.map(mobile => ({...mobile, ...{discounted_price: (((100-parseInt(mobile.discount))*parseInt(mobile.price))/100).toFixed(2)}}))
            },

            arrangeDiscountPrice(){
                return this.addDiscountedPrice.sort(function(a,b){return b.discounted_price-a.discounted_price})
            }

        },

       

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