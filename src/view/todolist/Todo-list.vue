<template class="container">
  <div class="todolist jumbotron">Todo List</div>
  <h3>
    当前共有<span class="text-primary">{{ list.length }}</span
    >个task，其中已完成<span class="text-success">{{ finish.length }}</span
    >个
  </h3>
  <h3 class="left">未完成task</h3>
  <ul class="list-group left">
    <template v-for="(item, index) in list" :key="index">
      <li
        class="list-group-item"
        @click="() => (item.checked = !item.checked)"
        v-if="!item.checked"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="item.checked"
            :id="'list_' + index"
          />
          <label class="form-check-label" :for="'list_' + index">
            {{ item.name }}
          </label>
        </div>
      </li>
    </template>
  </ul>
  <h3 class="left">已完成task</h3>
  <ul class="list-group left">
    <template v-for="(item, index) in finish" :key="index">
      <li class="list-group-item">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="item.checked"
            disabled
            :id="'finish_' + index"
          />
          <label class="form-check-label" :for="'finish_' + index">
            {{ item.name }}
          </label>
        </div>
      </li>
    </template>
  </ul>
  <h3 class="left">添加新task</h3>
  <div class="form-group">
    <!-- <label for="newtask"></label> -->
    <input
      type="text"
      class="form-control"
      id="newtask"
      placeholder="添加新task"
      v-model="newtask"
      @keydown.enter='add'
    />
  </div>
  <button type="button" @click="add" class="btn btn-primary btn-lg btn-block">
    确认添加
  </button>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    /*
        1.Checkbox -> checked ->isedit
        2.finish -> checked ->computed
        3.add
        4.doubul click isedit
        5.delete
      */
    const add = () => {
      state.list.push({
        name: state.newtask,
        checked: false,
        isedit: false,
      });
      state.newtask=''
    };
    let state = reactive({
      newtask: "",
      list: [
        {
          name: "1",
          checked: false,
          isedit: false,
        },
        {
          name: "2",
          checked: false,
          isedit: false,
        },
        {
          name: "3",
          checked: false,
          isedit: false,
        },
      ],
      finish: computed(() => {
        return state.list.filter((item) => item.checked == true);
      }),
    //   add,
    });
    // return toRefs(state);
    return {...toRefs(state),add}
  },
};
</script>
<style lang="scss" scoped>
.todolist {
  background: rgb(224, 247, 247);
}
.left {
  text-align: left;
  padding: 10px;
}
</style>
