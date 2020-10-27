import {reactive, ref} from 'vue'
function userListRemove() {
    let userList=reactive({
        user:[
            {id:1,name:'anna',age:10},
            {id:2,name:'boob',age:20},
            {id:3,name:'coco',age:30},
        ]
    })
    function remUser(index) {
        userList.user=userList.user.filter((item,idx)=> idx!=index )
    }
    return {userList,remUser}
}
export default userListRemove;