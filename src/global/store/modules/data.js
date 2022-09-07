// interface Todo {
//   id: number
//   completed: boolean
//   title: string
//   userId: number
// }

const data = {
  namespaced: true,
  // if there are more data types, then create a corresponding module
  // it's not necessary here
  state: () => ({
    todos: [],
    filters: {
      title: {
        value: "",
        match: (value, toInclude) => value.includes(toInclude), // method to match
        emptyValue: ""
      },
      completed: {
        value: null,
        match: (value, toCompare) => value === toCompare,
        emptyValue: null
      }
    }
  }),
  // typical CRUD here
  actions: {
    async delete({ commit }, id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: "DELETE"
        });
        commit("DELETE", id);
      } catch (e) {
        console.log(e);
      }
    },
    async update({ commit }, todo) {
      const { id, title, completed, userId } = todo;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          {
            // using patch here
            method: "PATCH",
            body: JSON.stringify({ id, title, completed, userId }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        );
        const updatedTodo = await response.json();
        commit("UPDATE", updatedTodo);
      } catch (e) {
        console.log(e);
      }
    },
    async create({ commit }, todo) {
      const { title, completed, userId } = todo;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          {
            method: "POST",
            body: JSON.stringify({ title, completed, userId }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        );
        const newTodo = await response.json();
        commit("CREATE", newTodo);
      } catch (e) {
        console.log(e);
      }
    },
    async readAll({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        commit("READ_ALL", todos);
      } catch (e) {
        console.log(e);
      }
    },
    setFilters({ commit }, payload) {
      commit("SET_FILTERS", payload);
    }
  },
  mutations: {
    DELETE(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    UPDATE(state, todo) {
      const { id } = todo;
      const indexToUpdate = state.todos.findIndex(todo => todo.id === id);
      state.todos[indexToUpdate] = todo;
      // because each item is not reactive by default
      state.todos = [...state.todos];
    },
    CREATE(state, newTodo) {
      state.todos = [...state.todos, newTodo]; // simple spread
    },
    READ_ALL(state, allTodos) {
      state.todos = allTodos; // todos are new array here, so no spread
    },
    SET_FILTERS(state, payload) {
      const { title, completed } = payload;
      state.filters.title.value = title;
      state.filters.completed.value = completed;
    }
  },
  getters: {
    filteredTodos(state) {
      let filtered = state.todos;
      const filters = state.filters;

      for (const key in filters) {
        if (Object.hasOwnProperty.call(filters, key)) {
          const filterValue = filters[key].value;
          if (filterValue !== filters[key].emptyValue) {
            const match = filters[key].match; // function
            filtered = filtered.filter(todo => match(todo[key], filterValue));
          }
        }
      }
      return filtered;
    }
  }
};

export default data;
