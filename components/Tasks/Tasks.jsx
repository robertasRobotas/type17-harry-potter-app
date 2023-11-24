import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./tasks.module.css";

const Task = ({ task, onTaskDelete }) => {
  return (
    <div
      onClick={() => onTaskDelete(task.id)}
      className={`
        ${styles.task}
        ${task.isCompleted ? styles.completed : styles.notCompleted}
        `}
    >
      <div>{task.title}</div>
    </div>
  );
};

const Tasks = () => {
  const [inputText, setInputText] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    setTasks(JSON.parse(tasks));
  }, []);

  const onAddTask = () => {
    const newTask = {
      id: uuidv4(),
      title: inputText,
      isCompleted: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setInputText("");
  };

  const onTaskDelete = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(filteredTasks);
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        placeholder="task"
        className={styles.input}
      />
      <button onClick={onAddTask} className={styles.button}>
        Add task
      </button>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <div key={task.id}>
            <Task task={task} onTaskDelete={onTaskDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
