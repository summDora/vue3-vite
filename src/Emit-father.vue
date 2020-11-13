<template>
    <div>
        this is father component
        <EmitChild msg='父元素传给子元素的信息' @fromChild='handler'></EmitChild>
        <p style="color:red">{{child}}</p>
    </div>
</template>
<script>
import EmitChild from './components/EmitChild.vue';
import {ref} from 'vue'
export default {
    name:'EmitFather',
    components:{
        EmitChild
    },
    setup(){
        const child = ref('');
        const handler = (value)=>{
            child.value=value
        }
        return {
            child,
            handler
        }
    }
}
</script>