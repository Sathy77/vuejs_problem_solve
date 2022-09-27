import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OddQ1 from '../views/OddQ1.vue'
import AscendingQ2 from '../views/AscendingQ2.vue'
import ReduceQ3 from '../views/ReduceQ3.vue'
import RemoveSimilarQ4 from '../views/RemoveSimilarQ4.vue'
import NegativeNumberQ5 from '../views/NegativeNumberQ5.vue'
import DivisibleByTenQ6 from '../views/DivisibleByTenQ6.vue'
import VowelsQ7 from '../views/VowelsQ7.vue'
import ArrangePriceQ8 from '../views/ArrangePriceQ8.vue'
import AddDiscountPriceQ9 from '../views/AddDiscountPriceQ9.vue'
import ArrangeDiscoutPriceQ10 from '../views/ArrangeDiscoutPriceQ10.vue'
import DescendingRatingQ11 from '../views/DescendingRatingQ11.vue'
import IphoneQ12 from '../views/IphoneQ12.vue'
import SamsungiPhoneQ13 from '../views/SamsungiPhoneQ13.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/q1',
    name: 'odd',
    component: OddQ1
  },
  {
    path: '/q2',
    name: 'q2',
    component: AscendingQ2
  },
  {
    path: '/q3',
    name: 'q3',
    component: ReduceQ3
  },
  {
    path: '/q4',
    name: 'q4',
    component: RemoveSimilarQ4
  },
  {
    path: '/q5',
    name: 'q5',
    component: NegativeNumberQ5
  },
  {
    path: '/q6',
    name: 'q6',
    component: DivisibleByTenQ6
  },
  {
    path: '/q7',
    name: 'q7',
    component: VowelsQ7
  },
  {
    path: '/q8',
    name: 'q8',
    component: ArrangePriceQ8
  },
  {
    path: '/q9',
    name: 'q9',
    component: AddDiscountPriceQ9
  },
  {
    path: '/q10',
    name: 'q10',
    component: ArrangeDiscoutPriceQ10
  },
  {
    path: '/q11',
    name: 'q11',
    component: DescendingRatingQ11
  },
  {
    path: '/q12',
    name: 'q12',
    component: IphoneQ12
  },
  {
    path: '/q13',
    name: 'q13',
    component: SamsungiPhoneQ13
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
