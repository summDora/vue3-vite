<template>
<div>
    <p>{{var1}}</p>
    <p>{{var2.info}}</p>
    <p>{{var3.time}}</p>
    <p>{{var4.time}}</p>
    <button @click="change">button</button>
</div>
</template>

<script>
/*
    - reactive是什么？
    +   reactive是vue3提供的实现响应式数据的方法
        在vue2中响应式数据通过defineProperty来实现
        而在vue3中响应式数据是通过es6中的proxy来实现的
    - reactive的注意点？
    +   react的参数必须是对象（json/arr）
    +   如果给reactive传递的不是自定义的对象 例如 Date
        +   默认情况下修改对象，log中的值会变，ui中的值不会更新
        +   如果想要ui中的对象同步更新，需要重新复制
*/
import { reactive,shallowRef,shallowReactive,triggerRef } from 'vue'
export default {
    name: 'App',
    setup() {
        let var1=reactive(123)
        let var2=reactive({
            info:111
        })
        let var3=reactive({
            time:new Date()
        })
        let var4=reactive({
            time:new Date()
        })
        const change =()=>{
            var1=456
            console.log(var1);      // 456
            /* 因为var1传递的参数不是对象 ， 所以初始化时虽然可以在页面上显示，但是不是响应式数据，后续ui页面上不会同步更新 */
            var2.info+=1
            console.log(var2);      // Proxy {info: 112++++}
            /* var2传递的参数是自定义的对象。更新的方式也是重新赋值，所以ui可以同步更新  */
            var3.time.setDate(var3.time.getDate()+1)
            console.log(var3);      // Proxy {time: Thu Nov 19 2020 15:58:50 GMT+0800 (中国标准时间)}
            /* var3传递的参数是非自定义对象。更新的方式不是重新赋值，所以ui不会同步更新  */
            let newdate=new Date(var4.time.getTime())
            newdate.setDate(var4.time.getDate()+1)
            var4.time=newdate
            console.log(var4);      // Proxy {time: Thu Nov 19 2020 15:58:50 GMT+0800 (中国标准时间)}
            /* var4传递的参数是非自定义对象。更新的方式是重新赋值，所以ui可以同步更新  */
        }
       return {var1,var2,var3,var4,change }
    },
}

</script>
