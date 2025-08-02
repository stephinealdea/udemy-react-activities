import React from 'react';

interface TodoItemProps {
    todo: {
        id: number;
        title: string;
        completed: boolean;
    };
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete }) => {
    return (
        <div>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={() => onEdit(todo.id)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;