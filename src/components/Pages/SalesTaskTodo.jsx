import { useState, useEffect } from "react";
import "./SalesTaskTodo.css";
import Navigation from "./Header/Navigation"; // Import Navigation component
import Footer from "./Footer/Footer"; // Import Footer component


function SalesTaskTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [highlightedTodoId, setHighlightedTodoId] = useState(null);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setTodos(data.slice(0, 5)); // Limit to first 5 todos for simplicity
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        project: "", // Project name
        text: newTodo,
        complete: false,
        dueDate: "", // Due date
        priority: "Low", // Priority
        description: "", // Description
        editing: false
      };
      setTodos([newTodoItem, ...todos]);
      setNewTodo("");
      setHighlightedTodoId(newTodoItem.id);
      setTimeout(() => {
        setHighlightedTodoId(null);
      }, 1000);
    }
  };

  const toggleTodoCompletion = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const saveTodo = (id, newText) => {
    editTodo(id, newText);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editing: false };
        }
        return todo;
      })
    );
    setSavedMessage("Changes saved!");
    setTimeout(() => {
      setSavedMessage("");
    }, 2000);
  };

  return (
    <div>
    {/* <Navigation /> */}
    <div className="sales-task-todo">
      <h1>BeetTrack: Streamlined Project Management Tool</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={highlightedTodoId === todo.id ? "highlighted" : ""}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodoCompletion(todo.id)}
            />
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => editTodo(todo.id, e.target.value)}
                />
                <button onClick={() => saveTodo(todo.id, todo.text)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span className={todo.complete ? "completed" : ""}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  disabled={!todo.complete}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, editing: true } : t
                      )
                    )
                  }
                >
                  Edit
                </button>
              </>
            )}
            <span>Project: {todo.project}</span>
            <span>Due Date: {todo.dueDate}</span>
            <span>Priority: {todo.priority}</span>
            <span>Description: {todo.description}</span>
          </li>
        ))}
      </ul>
      {savedMessage && <div className="saved-message">{savedMessage}</div>}
    </div>
    {/* <Footer /> */}
  </div>
  );
}

export default SalesTaskTodo;
