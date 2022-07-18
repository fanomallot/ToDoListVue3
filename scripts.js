const handlingToDo = {
  data() {
    return {
      toDoList: [],
      toDo: null
    }
  },
  methods: {
    save() {
      this.toDoList.push({title: this.toDo, done: false})
      this.toDo = null
    },
    done(index) {
      this.toDoList[index].done = !this.toDoList[index].done
    },
    clearAll() {
      this.toDoList = []
    }
  },
};

Vue.createApp(handlingToDo).mount('#app');
