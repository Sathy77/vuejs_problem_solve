<template>
    <div class="ProblemList">


      <ul>
        <li><a href="/q1">Q1</a></li>
        <li><a href="/q2">Q2</a></li>
        <li><a href="/q3">Q3</a></li>
        <li><a href="/q4">Q4</a></li>
        <li><a href="/q5">Q5</a></li>
        <li><a href="/q6">Q6</a></li>
        <li><a href="/q7">Q7</a></li>
        <li><a href="/q8">Q8</a></li>
        <li><a href="/q9">Q9</a></li>
        <li><a href="/q10">Q10</a></li>
        <li><a href="/q11">Q11</a></li>
        <li><a href="/q12">Q12</a></li>
        <li><a href="/q13">Q13</a></li>
        <li style="float:right"><a class="active" href="#about">About</a></li>
      </ul>


    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ProblemList',
  }
  </script>

  <style>
    ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
  </style>
  