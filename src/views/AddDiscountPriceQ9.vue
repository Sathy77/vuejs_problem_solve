<template>
    <div class="AddDiscountPriceQ9">
        <h1>link : https://notepad.pw/WGkW3s9D6N3Iz3KzPAX0</h1>
        <h1>Q9. Using a javascript array method add a new field (discounted_price) to each of the objects in the array.</h1>
        
        <!-- <button @click="addDiscountedPrice()">Click</button>   [prosse 2: when use method then you need a click, it is the click button]--> 
        
        <table class="customers">
        <tr><th>Serial Number</th><th>Phone Name</th><th>Phone Price</th><th>Phone Brand</th><th>Rating</th><th>Discounted Price</th></tr>
        
        <!-- <tr v-for="(phone, index) in addDiscountedPrice" :key="index">         [prosse 1: using computed]
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{phone.price}}</td>
            <td>{{phone.brand}}</td>
            <td>{{phone.rating.average}}</td>
            <td>{{phone.discounted_price}}</td>
        </tr> -->

        
        <tr v-for="(phone, index) in copyMobileArray" :key="index">
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
        name: 'AddDiscountPriceQ9',
        data(){
            return{
                mobileArray: JSON.parse(JSON.stringify(mobile)),
                copyMobileArray: []
            }
        },
        // computed:{
        //     addDiscountedPrice(){
        //         return this.mobileArray.map(mobile => ({...mobile, ...{discounted_price: (((100-parseInt(mobile.discount))*parseInt(mobile.price))/100).toFixed(2)}}))
        //     },

        // },

        // [prosse 3:  you use methods but you don't want to click a button then you can make a mounted or created function where you can call method function dudai]
        mounted(){  
            this.addDiscountedPrice()
        },
        methods:{
            addDiscountedPrice(){
                this.copyMobileArray = this.mobileArray.map(mobile => ({...mobile, ...{discounted_price: (((100-parseInt(mobile.discount))*parseInt(mobile.price))/100).toFixed(2)}}))
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