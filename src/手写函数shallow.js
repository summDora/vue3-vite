/*
    shallowRef，shallowReactive
*/
function shallowReactive(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, value) {
      obj[key] = value;
      console.log("更新ui视图");
      return true;
    },
  });
}
let obj = {
  a: "a",
  gf: {
    b: "b",
    f: {
      c: "c",
      s: {
        d: "d",
      },
    },
  },
};
let state = shallowReactive(obj);
state.a = 1;
state.gf.b = 2;
state.gf.f.c = 3;
/* log 更新ui视图 一次 shallowreactive就是更新第一层数据 */

function shallowRef(obj) {
  return shallowReactive({ value: obj });
}
let state_ref = shallowRef(obj);
state_ref.value.a = 1; //无效果
state_ref.value = {
  a: "1",
  gf: {
    b: 2,
    f: {
      c: 3,
      s: {
        d: 4,
      },
    },
  },
};
console.log(state_ref);
/* shallowref 更改的是value的值 而不是第一层数据 */
