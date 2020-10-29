<template>
    <div>
        <p>{{react_obj}}</p>
        <button @click='fn'>按钮</button>
    </div>
</template>
<script>
import { markRaw, reactive } from 'vue'
export default {
    name:'markRow',
    setup(){
        let obj={name:'summer',nick:'dora'}
        let mark_obj=markRaw(obj) // markRow 为 obj添加了不可转的 非响应式标记
        let react_obj=reactive(obj) //即使 再使用 reacti进行转化 也没有效果了
        const fn=()=>{
            react_obj.name='SUMMER'
            console.log(obj);
            console.log(mark_obj);
            console.log(react_obj);
            /*
                控制台的name是变化了的
                ui的内容没有变化
             */
        }
        return { obj,react_obj,fn }
    },
}
</script>