<template>
<div>
    <p>{{test}}</p>
    <p>{{react_test}}</p>
    <button @click="change">button</button>
</div>
</template>

<script>
/*
    - toRaw是什么？
    +   toRaw是将reactive或ref创建的响应式数据转换成普通对象
        这是一个还原方法，可用于临时读取
        访问时不会被追踪或者代理，写入时也不会触发ui更改
        不建议一直持有原始对象的引用
        请谨慎使用
    - reactive的注意点？
    +   react的参数必须是对象（json/arr）
    +   如果给reactive传递的不是自定义的对象 例如 Date
        +   默认情况下修改对象，log中的值会变，ui中的值不会更新
        +   如果想要ui中的对象同步更新，需要重新复制
*/
import { reactive,shallowRef,shallowReactive,triggerRef, toRaw, ref } from 'vue'
export default {
    name: 'App',
    setup() {
       const test={name:'doctor',age:20}
       const react_test=reactive(test)
       const ref_test=ref(test)
       const raw_react_test=toRaw(react_test)
       const raw_ref_test=toRaw(ref_test)
       const raw_ref_value_test=toRaw(ref_test.value)
       console.log(raw_react_test===test); // true
       console.log(raw_ref_test===test); // false
       console.log(raw_ref_value_test===test); // true
       /*
        -   注意点：
                    toRaw用来还原reactive类型的数据的时候，可以直接调用toRaw(react_test)
                    但是因为 ref(obj) -> reactive({value:obj})
                    so用toRaw来还原ref类型的数据，需要传入的参数是.value的值，方可还原成普通对象
                    raw_ref_value_test=toRaw(ref_test.value)
       */
       const change=()=>{
           test.name='ninepercent'
           react_test.name='react_test_ninepercent'
           console.log(test);
           console.log(react_test);
           console.log(ref_test);
           console.log(raw_react_test);
           console.log(raw_ref_test);
       }
       return {test,react_test,change }
    },
}

</script>
