# vue-router

## vue3.x的路由有所变化

history模式

vue2.x: mode:histroy

vue3.x: history:createWebHistroy()

创建路由

vue2.x:

Vue.use(VueRouter)

router = new VueRouter({

    mode:'history'

    routes:[

        {

            path:'/',component

        }

    ]

})

vue3.x: router = createRouter({

    linkActiveClass:'route_active'

    history:createWebHistroy()

    routes:[

        {

            path:'/',component

        }
    ]
})

路由挂载

vue2.x:

new Vue({

    router,store,render:(h)=>{return h(app)}

}).$mount('#app')

vue3.x:

const app = createApp(app);

app.user(router);

app.mount('#app')

# sass

## cnpm install sass-loader node-sass sass --save-dev

## yarn add sass-loader node-sass sass --dev

#

