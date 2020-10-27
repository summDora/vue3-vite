<template>
<div>
    <p>{{name1}}</p>
    <button @click="myFn1">myFn1</button>
    <p>{{name2}}</p>
    <button @click="myFn2">myFn2</button>
</div>
</template>
<script>
/*
-setup  是使用compositionAPI的入口，在生命周期beforeCreate之前被调用
        所以在调用setup的时候，vue中的data和methods还没有初始化完成
        所以在setup函数中不可使用data和methods
        vue官方强制把setup函数中的this指向undefined
        setup函数只能是同步的，不能是异步的
*/
import {ref} from 'vue'
export default {
    name: 'App',
    data() {
        return {
            name1:'crystal'
        }
    },
    methods: {
        myFn1(){
            alert('hello crystal')
        }
    },
    setup() {
       const name2=ref('summerdora')
       const myFn2=()=>{alert('hello summerdora!')}
       console.log(name2) //RefImpl{value:summerdora}
       console.log(myFn2) //()=>{alert('hello summerdora!')}
      /*
        console.log(this)
        //undefined
        console.log(this.name1)
        //typeerror
        console.log(this.myFn1)
        //typeerror
        */
       return {name2,myFn2}
    },
}
</script>
