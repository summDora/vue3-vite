<template>
<div>
    <form>
        <input type="text" v-model="userInfo.id">
        <input type="text" v-model="userInfo.name">
        <input type="text" v-model="userInfo.age">
        <input type="submit" @click="addUser">
    </form>
   <ul>
       <li v-for="(item,index) in userList.user" :key="item.id" @click="remUser(index)">
           姓名：{{item.name}}----年龄：{{item.age}}
       </li>
   </ul>
</div>
</template>

<script>
import {reactive, ref} from 'vue'
import userListRemove from './view/user/remuser'
import userListAdd from './view/user/adduser'
export default {
    name: 'App',
    setup() {
        let {userList,remUser}=userListRemove()
        let {userInfo,addUser}=userListAdd(userList)
        return { userList,remUser,userInfo,addUser, }
    },
}
</script>
