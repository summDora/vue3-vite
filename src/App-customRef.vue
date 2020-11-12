<template>
<div>
    <p>{{state}}</p>
    <button @click="change">button</button>
    <p>{{jsonList}}</p>
    <ul>
        <li v-for="item in jsonList" :key="item.id">{{item.id}}---.____{{item.name}}</li>
    </ul>
    <ul>
        <li v-for="(item,index) in number" :key="index">{{item}}</li>
    </ul>
    <button @click="short">缩短</button>
</div>
</template>
<script>
/*
    -   customRef是什么？
        +   customRef用于自定义返回一个ref对象，可以显式地控制依赖追踪和触发响应
*/
import { customRef, triggerRef } from 'vue'
function myRef(value){
    return customRef((track,trigger)=>{
        return {
            get(){
                console.log(value)
                track() //告诉vue 这个数据是需要追踪的
                return value
            },
            set(newValue){
                value=newValue
                console.log(value,'-----get----');
                trigger() //通知vue 触发ui页面更新数据
            }
        }
    })
}
function jsonFetch(value){
    return customRef((track,trigger)=>{
        fetch(value).then(res=>{
            return res.json()
        }).then(data=>{
            value=data
            trigger()
        }).catch(err=>{
            console.log(err)
        })
        return {
            get(){
                //get 方法里不可以 发送网络数据 会死循环
                track();
                return value
            },
            set(newValue){
                value=newValue;
                trigger()
            }
        }
    })
}
export default {
    data() {
        return {
            number:[1,2,3,4,5,6]
        }
    },
    methods: {
        short(){
            if(this.number.length<=3){
                this.number.length++
            }else{
                this.number.length--
            }
        }
    },
    setup(){
        let state=myRef(24)
        let jsonList=jsonFetch('../public/test.json')
        const change=()=>{
            state.value++;
        }
        return {state,change,jsonList}
    }
}
</script>