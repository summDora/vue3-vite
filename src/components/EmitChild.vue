<template>
    <div>
        this is child component
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    props:{
        msg:'',
    },
    setup (props,{ emit }) {
        const txt = '子元素传给父元素的值';
        emit('fromChild',txt);
    }
    /*
        setup（ props，ctx ）
        第二个参数表示上下文
        上下文里面包括 { attrs, slots, emit }
    */
}
</script>