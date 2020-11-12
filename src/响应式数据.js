/*
响应式数据：
----在vue2中响应式数据通过defineProperty来实现；
在data中声名一个obj后，vue2.x会利用Object.defineProperty来递归的给data中的数据加上get和set，然后每次set的时候，加入额外的逻辑。来触发对应模板视图的更新
----而在vue3中响应式数据是通过es6中的proxy来实现的；
通过proxy实现对data对象的get和set的劫持，并返回一个代理的对象
*/
let obj_test = {name:'fhl',age:24}
let state  =  new Proxy(obj_test,{
    get(obj,key){
        console.log('get',obj,key);
        // get { name: 'fhl', age: 24 } name
        // get { name: 'rjl', age: 24 } name
        return obj[key]
    },
    set(obj,key,value){
        console.log('set',obj,key,value);
        // set { name: 'fhl', age: 24 } name rjl
        obj[key]=value
        console.log('更新ui界面');
        // 更新ui界面
    }
})
console.log(state.name);
// fhl
state.name='rjl'
console.log(state.name);
// rjl

/*
    log顺序：
    get { name: 'fhl', age: 24 } name
    fhl
    set { name: 'fhl', age: 24 } name rjl
    更新ui界面
    get { name: 'rjl', age: 24 } name
    rjl
*/

let arr=[1,3,5]
let arr_state = new Proxy(arr,{
    get(obj,key){
        console.log('get',obj,key);
        return obj[key]
    },
    set(obj,key,value){
        console.log('set',obj,key,value);
        obj[key]=value
        console.log('更新ui界面-arr');
        /*
            数组操作 添加一个值 更改数组的length 是两步操作
            如果第一步操作之后 不返回true 以后的操作会被堵塞 会报错
        */
       return true
    }
})
console.log(arr_state[1]);
arr_state.push(7)
console.log(arr_state);
/*
    get [ 1, 3, 5 ] 1
    3
    get [ 1, 3, 5 ] push
    get [ 1, 3, 5 ] length
    set [ 1, 3, 5 ] 3 7
    更新ui界面-arr
    set [ 1, 3, 5, 7 ] length 4
    更新ui界面-arr
    [ 1, 3, 5, 7 ]
*/