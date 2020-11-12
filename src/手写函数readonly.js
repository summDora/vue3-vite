function shallowReadonly(obj) {
    return new Proxy(obj, {
        get(obj, key) {
            return obj[key];
        },
        set(obj, key, value) {
            console.warn(`${key}是只读的，不可赋值`);
            /*
                shallowReadonly 只读 意味着 只能get 不能set
                所以只需要将 set 代码块的语句 删除掉
                并添加一个 警告提醒 即可
            */
        }
    })
}
function readonly(obj) {
    /* 以下代码为 reactive 的源码 */
    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            // 如果是数组，遍历判断每个元素是否是对象
            // 如果元素也是对象，则 也需要包装
            obj.forEach((item, index) => {
                if (typeof item === 'object') {
                    obj[index] = readonly(item)
                }
            })
        } else {
            // 如果是一个对象，则取出对象属性的取值
            // 判断取值是否又是一个对象，如果是，也需要包装
            for (let key in obj) {
                let item = obj[key]
                if (typeof item === 'object') {
                    obj[key] = readonly(item)
                }
            }
        }
        return new Proxy(obj, {
            get(obj, key) {
                return obj[key];
            },
            set(obj, key, value) {
                console.warn(`${key}是只读的，不可赋值`);
                /*
                    shallowReadonly 只读 意味着 只能get 不能set
                    所以只需要将 set 代码块的语句 删除掉
                    并添加一个 警告提醒 即可
                */
            }
        })
    } else {
        console.warn(`${obj} is not a object`);
    }
}
let object = {
    name: 1,
    id: 2,
    attr: {
        height:3
    }
}
let state1 = shallowReadonly(object);
console.log(object,'object-origin');
state1.name = 'name';
state1.attr.height = 'height'
/* name是只读的，不可赋值 */
/* 不会检测到 height 改变 */
/* shallowReadonly 用于创建一个只读元素，单并不是递归只读，只有第一层是只读的 */
console.log(state1);
console.log(object,'object');
let state2 = readonly(object)
console.log(state2,'origin');
state2.name = 'name';
state2.attr.height = 'height_height'
console.log(state2, 'changed-----');
/*
    { name: 1, id: 2, attr: { height: 'height' } } origin
    name是只读的，不可赋值
    height是只读的，不可赋值
    { name: 1, id: 2, attr: { height: 'height' } } changed-----
*/
