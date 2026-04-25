// router configuration

import { createRouter, createWebHistory } from "vue-router";


import HomePage from "../components/HomePage.vue";
import DashBoard from "../components/DashBoard.vue";
import Login from "../components/LoginPage.vue";
import AboutUs from "../components/AboutUs.vue";
import NotFound from "../views/NotFound.vue";
import gabinPage from "../components/gabinPage.vue";
import anithapage from "../components/anithapage.vue";

const routes=[
    {path:'/',name:'Home',component:HomePage},
    {path:'/Dash',name:'Dash',component:DashBoard},
    {path:'/Login',name:'Login',component:Login},
    {path:'/about',name:'AboutUs',component:AboutUs},
    {path:'/gabin',name:'gabin',component:gabinPage},
    {path:'/anitha',name:'anitha',component:anithapage},
    {path:'/:pathMatch(.*)*', name:'NotFound', component:NotFound}
];

const router = createRouter({
    history: createWebHistory(), routes
})

export default router
