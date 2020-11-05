<template>
    <div>
        <p>{{ref_state}}</p>
        <p>{{to_ref_state}}</p>
        <button @click="fn">按钮</button>
    </div>
</template>
<script>
import { ref, toRef } from 'vue'
export default {
    setup(){
        let state={name:'summer',nick:'jiaren'}
        let to_ref_state=toRef(state,'name')
        let ref_state=ref(state.name)
        const fn=()=>{
            ref_state.value='d---ora'
            console.log(state,'不改变原数据'); // {name: "summer", nick: "jiaren"} "不改变原数据"
            console.log(to_ref_state,'不改变原数据'); // _key: "name"  _object: {name: "summer", nick: "jiaren"}
            /*
                结论：
                    如果利用ref将对象中的某一属性转化成响应式类型
                    我们修改响应式的数据 是不会影响到原数据的
            */
            to_ref_state.value='doraaaaaa'
            console.log(state); // {name: "doraaaaaa", nick: "jiaren"}
            console.log(ref_state); //_rawValue: "d---ora" _shallow: false _value: "d---ora" value: "d---ora"
            /*
                结论：
                    如果利用toRef将对象中的某一属性转化成响应式类型
                    我们修改响应式的数据 是会影响到原数据的 但是不会改变ui视图
            */
        }
        return { state,fn,ref_state,to_ref_state }
    }
    /*
        -   ref 和 toRef 的区别？
            +   ref -> 复制 ，修改响应式数据不会影响以前的数据
                如果 响应式数据发生改变，页面就回自动更新
            +   toRef -> 引用 ，修改响应式数据会影响以前的数据
                如果 响应式数据发生改变，页面也不会自动更新
        -   toRef 的适用场景
            +   想让响应式数据与之前的数据关联起来，并更新响应式数据之后还不想更新ui
                可使用toRef
    */
}
</script>