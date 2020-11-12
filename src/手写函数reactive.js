function reactive(obj) {
    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            // 如果是数组，遍历判断每个元素是否是对象
            // 如果元素也是对象，则 也需要包装
            obj.forEach((item, index) => {
                if (typeof item === 'object') {
                    obj[index] = reactive(item)
                }
            })
        } else {
            // 如果是一个对象，则取出对象属性的取值
            // 判断取值是否又是一个对象，如果是，也需要包装
            for (let key in obj) {
                let item = obj[key]
                if (typeof item === 'object') {
                    obj[key] = reactive(item)
                }
            }
        }
        return new Proxy(obj, {
            get(obj, key) {
                return obj[key]
            },
            set(obj, key, value) {
                obj[key] = value
                console.log('更新ui视图');
                return true
            }
        })
    } else {
        console.warn(`${obj} is not a object`);
    }
}
function ref(obj) {
    return reactive({value:obj})
}
let object = {
    a: 1, b: 2, c: 3, d: 4
}
let array = [1, 2, 3, { name: 1 }, { age: 3 }]
let state1 = reactive(object)
let state2 = reactive(array)
state1.a = 'aaa';
state1.b = 'bbbb';
state2[3].name = 'baby'
let test = 'string'
let state3 = ref(test)
state3.value = 'string-string'
console.log(state1);
console.log(state2);
console.log(state3);
let state4 = reactive(456)
/* 456 is not a object */
/* console.log(state4); */
/* undefined */

