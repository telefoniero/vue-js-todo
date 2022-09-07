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
    filter: ""
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
    }
  },
  mutations: {
    DELETE({ todos }, id) {
      todos = todos.filter(todo => todo.id !== id);
    },
    UPDATE({ todos }, todo) {
      const { id } = todo;
      const indexToUpdate = todos.findIndex(todo => todo.id === id);
      todos[indexToUpdate] = todo;
      // because each item is not reactive by defaulty
      todos = { ...todos };
    },
    CREATE({ todos }, newTodo) {
      todos = [...todos, newTodo]; // simple spread
    },
    READ_ALL({ todos }, allTodos) {
      todos = allTodos; // todos are new array here, so no spread
    }
  },
  getters: {
    filteredTodos({ todos, filter }) {
      return todos.filter(todo => todo.title.includes(filter));
    }
  }
};

export default data;
