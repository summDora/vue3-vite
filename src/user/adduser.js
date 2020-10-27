import {reactive, ref} from 'vue'
function userListAdd(userList) {
    let userInfo=reactive({
        id:'',
        name:'',
        age:'',
    })
    let addUser=(e)=>{
        e.preventDefault();
        let newUser=Object.assign({},userInfo)
        userList.user.push(newUser)
        userInfo.id=''
        userInfo.name=''
        userInfo.age=''
    }
    return {userInfo,addUser}
}
export default userListAdd;