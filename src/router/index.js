import { createWebHistory,createRouter} from 'vue-router'
import AppCompositonAPI from '../App-compositonAPI.vue'
import AppReactive from '../App-reactive.vue'
import AppRef from '../App-ref.vue'
import AppSetup from '../App-setup.vue'
import AppToraw from '../App-toRaw.vue'
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
]
const routerHistory=createWebHistory()
const router=createRouter({
    history:routerHistory,
    routes
})
export default router