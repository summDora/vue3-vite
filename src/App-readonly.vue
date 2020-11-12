<template>
    <div>
        <p>{{state.name}}</p>
        <p>{{state.attr.age}}</p>
        <p>{{state.attr.sex}}</p>
        <hr>
        <p>{{shallowState.name}}</p>
        <p>{{shallowState.attr.age}}</p>
        <p>{{shallowState.attr.sex}}</p>
        <hr>
        <p>{{constData}}</p>
        <hr>
        <p>{{constState.name}}</p>
        <p>{{constState.type}}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>
<script>
import { readonly, shallowReadonly } from 'vue'
export default {
    setup(){
        // readonly 用于创建一个只读元素，并且递归只读，所有下面属性 都是只读
        let state = readonly({
            name:'fhl',
            attr:{age:24,sex:'female'}
        })
        // shallowReadonly 用于创建一个只读元素，单并不是递归只读，只有第一层是只读的
        let shallowState = shallowReadonly({
            name:'rjl',
            attr:{age:30,sex:'male'}
        })
        // const 和 readonly的区别
        // const： 赋值保护，不能重新向变量赋值
        // readonly： 属性保护，不能重新向属性赋值
        const constData = 123
        const constState = {name:'const',type:'var'}
        function myFn(){
            state.name='rjl',
            state.attr.sex='male'
            console.log(state);
            //不会更改 Set operation on key "name" failed: target is readonly

            shallowState.name='fhl'
            shallowState.attr.sex='female'
            console.log(shallowState);
            // 第二层会更改 Set operation on key "name" failed: target is readonly

            // constData=456
            // console.log(constData);
            // Uncaught TypeError: Assignment to constant variable.
            // 报错 不能再向下执行

            constState.name='changeConst'
            constState.type='changeVar'
            console.log(constState);
            // {name: "changeConst", type: "changeVar"}
            // 数据改变，但是视图不会改变，因为不是响应式数据
        }
        return { state , myFn , shallowState, constData, constState }
    }
}
</script>