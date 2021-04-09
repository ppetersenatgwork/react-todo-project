import { v4 as uuidv4 } from "uuid";

export default class TodosService {
    static get TODO_URL() { return "https://jsonplaceholder.typicode.com/todos?_limit=10"; }
    
    static todos;

    static async getTodos() {
        if (!this.todos) {
            console.log("Getting todos...");
            if(!localStorage.getItem("todos")) {
                console.log("Todos not found in local storage, initializing...");
                this.todos = await (await fetch(this.TODO_URL)).json();
            } else {
                console.log("Getting todos from local storage...");
                this.todos = JSON.parse(localStorage.getItem("todos"));            
            }
        }
        console.log("TODOS:", this.todos);
        return this.todos;
    }

    static toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        return this.todos;
    }

    static deleteTodo(id) {
        this.todos = this.todos.filter(todo => {
            return todo.id !== id;
        })
        return this.todos;
    }

    static addTodo(title) {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        this.todos = [...this.todos, newTodo];

        return this.todos;
    }

    static updateTodoTitle(title, id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        })

        return this.todos;
    }

    static persistTodos() {
        console.log("Persisting todos");
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}