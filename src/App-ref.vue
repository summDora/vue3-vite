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
