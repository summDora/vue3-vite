<template>
<div>
    <p>{{count}}</p>
    <button @click="addCount">add</button>
    <button @click="subCount">sub</button>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'
/*
-   ref和reactive一样，也是用来实现响应式数据的方法
-   ref的本质还是reactive，系统会根据我们传给ref的值将他转化成reactive
        +   ref(18)->reactive({value:18})
        +   所以更改ref数据时，需要 变量名.value=新值
*/
export default {
    name: 'App',
    components: {
        HelloWorld
    },
    setup() {
        const count=ref(0)
        const addCount=()=>{count.value+=10}
        const subCount=()=>{count.value-=5}
       /*  function addCount(){
            count.value+=10
        }
        function subCount(){
            count.value-=5
        } */
        console.log(count)
        return { count,addCount,subCount }
    }
}
</script>
