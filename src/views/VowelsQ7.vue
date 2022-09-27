<template>
    <div class="VowelsQ7">
        <h1>Q7. Return the number of vowels in a string. Example: vowels (‘ How are you ’) => 5</h1>

        <table class="customers">
        <tr><th>Serial Number</th><th>Given String</th><th>Number Of Vowel</th></tr>
        
        <tr>
            <td>{{1}}</td>
            <td>{{str}}</td>
            <td>{{countVowel}}</td>
            
        </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'VowelsQ7',
        data(){
            return{
                 str: prompt('Enter a string: ')
            }
        },
        computed: {
            countVowel() {  
                return this.str.toLocaleLowerCase().match(/[aeiou]/gi).length;
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