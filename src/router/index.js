import { createWebHistory,createRouter} from 'vue-router'
import AppCompositonAPI from '../App-compositonAPI.vue'
import AppReactive from '../App-reactive.vue'
import AppRef from '../App-ref.vue'
import AppSetup from '../App-setup.vue'
import AppToraw from '../App-toRaw.vue'
import AppMarkraw from '../App-markRaw.vue'
import AppToref from '../App-toRef.vue'
import AppCustomRef from '../App-customRef.vue'
const routes=[
    {
        path:'/',
        component:AppCompositonAPI
    },
    {
        path:'/reactive',
        component:AppReactive
    },
    {
        path:'/ref',
        component:AppRef
    },
    {
        path:'/setup',
        component:AppSetup
    },
    {
        path:'/toraw',
        component:AppToraw
    },
    {
        path:'/markraw',
        component:AppMarkraw
    },
    {
        path:'/toref',
        component:AppToref
    },
    {
        path:'/customref',
        component:AppCustomRef
    },
]
const routerHistory=createWebHistory()
const router=createRouter({
    linkActiveClass:'route_active',
    history:routerHistory,
    routes
})
export default router