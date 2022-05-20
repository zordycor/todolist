<template>
  <div class="home-view">
    <h1>Todo List</h1>
    <input type="text" v-model="search" class="home-view__search" placeholder="Search"/>
    <ul class="home-view__list">
      <TodoComponent
        v-for="todo in getFilteredTodos"
        :key="todo.id"
        :todo="todo"
        :highlightText="search"
      />
    </ul>
  </div>
</template>

<script>
import { TodoService } from '@/services';
import TodoComponent from '@/components/TodoComponent/TodoComponent.vue';

export default {
  name: 'HomeView',
  components: {
    TodoComponent
  },
  data() {
    return {
      todoList: [],
      search: '',
    }
  },
  async mounted() {
    this.todoList = await TodoService.fetchTodos();
  },
  computed: {
    getFilteredTodos() {
      const filteredTodos = this.todoList.filter(todo =>
        this.getFilteredElements(todo, 'description') || this.getFilteredElements(todo, 'memo')
      );

      return filteredTodos;
    },
  },
  methods: {
    getFilteredElements(todo, key) {
      return todo[key].toLowerCase().includes(this.search.toLowerCase());
    },
  }
}
</script>

<style src="./HomeView.scss" lang="scss">
</style>
