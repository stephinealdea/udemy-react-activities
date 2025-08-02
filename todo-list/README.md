# My Todo App

This is a simple Todo application built with React and TypeScript. The application allows users to add, edit, and delete todo items. The todo list is stored in the browser's local storage, ensuring that the data persists across sessions.

## Features

- Add new todo items
- Edit existing todo items
- Delete todo items
- Persistent storage using localStorage

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-todo-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd my-todo-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm start
   ```

   The application will be running on `http://localhost:3000`.

## Project Structure

```
my-todo-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoForm.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- React
- TypeScript
- localStorage

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.