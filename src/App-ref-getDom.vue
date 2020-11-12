<template>
    <div>
        <div ref='box'>
            app - ref - get - dom
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
export default {
    setup(){
        let box = ref(null)

        onMounted(()=>{
            console.log('onMounted',box.value);
        })

        console.log('setup',box.value); //null

        onMounted(()=>{
            console.log('onMounted',box.value);
        })

        return {box}

        /*
            因为在生命周期 mounted 时  方可访问到 dom 元素
            所以 不管 mounted 之外的 log 置于何地
            输出顺序 setup null -> onMounted div -> onMounted div
        */
    }
}
</script>