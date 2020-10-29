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
    -   ref是什么？
    -   ref和reactive一样，也是用来实现响应式数据的方法
    -   ref的本质还是reactive，系统会根据我们传给ref的值将他转化成reactive
            +   ref(18)->reactive({value:18})
            +   所以更改ref数据时，需要 变量名.value=新值
            +   shallowRef(18)->shallowReactive({value:18})
            +   所以shallowRef创建的数据，vue监听的不是第一层数据，而是.value的值
*/
/*
    -   ref和reactive的区别：
        +   在template中使用ref类型数据，vue会自动我们添加.value
        +   在template中使用reactive类型数据，vue不会自动我们添加.value
        +   vue在解析数据之前会自动判断这个数据是否属于ref类型
        +   判断方式通过当前数据的私有属性__v_ref来判断
        +   如果有这个私有属性且为true，那就代表这是一种ref类型数据
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
