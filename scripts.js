const handlingToDo = {
  data() {
    return {
      toDoList: [],
      toDo: null
    }
  },
  computed: {
    toDoNotExist() {
      return !this.toDo
    },
    saveLocalData() {
      localStorage.setItem('todos', JSON.stringify(this.toDoList))
    }
  },
  methods: {
    save() {
      if (!this.toDoNotExist) {
        this.toDoList.push({title: this.toDo, done: false});
        this.toDo = null;
        saveLocalData();
      }
    },
    done(index) {
      this.toDoList[index].done = !this.toDoList[index].done;
      saveLocalData();
    },
    clearAll() {
      this.toDoList = [];
      saveLocalData();
    }
  },
  created() {
    this.toDoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.toDoList
  },
};

Vue.createApp(handlingToDo).mount('#app');
