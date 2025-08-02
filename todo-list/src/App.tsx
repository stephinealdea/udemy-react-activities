import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Todo } from './types';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const parsedTodos: Todo[] = JSON.parse(storedTodos).map((todo: any) => ({
            ...todo,
            id: Number(todo.id)
        }));
        setTodos(parsedTodos);
        // Set nextId to max existing id + 1
        const maxId = parsedTodos.reduce((max: number, todo: Todo) => Math.max(max, todo.id), 0);
        setNextId(maxId + 1);
    }
}, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: nextId,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
    };

    const editTodo = (id: number, updatedTitle: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title: updatedTitle } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div>
            <h1>My Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;