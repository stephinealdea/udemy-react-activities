import React from "react";
import { Todo } from "../types";

type TodoListProps = {
    todos: Todo[];
    editTodo: (id: number, updatedTitle: string) => void;
    deleteTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, editTodo, deleteTodo }) => (
    <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.title}
                <button
                    onClick={() => {
                        const newTitle = prompt("Edit todo:", todo.title);
                        if (newTitle !== null && newTitle.trim() !== "") {
                            editTodo(todo.id, newTitle.trim());
                        }
                    }}
                >
                    Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TodoList;
