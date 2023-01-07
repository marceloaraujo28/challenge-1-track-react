import styles from "./Main.module.css";
import { PlusCircle } from "phosphor-react";
import { Counter } from "./Counter";
import { Tasks } from "./Tasks";
import { ChangeEvent, useState } from "react";
import { EmptyState } from "./EmptyState";

interface Tasks {
  id: number;
  message: string;
  finished: boolean;
}

export function Main() {
  const [messageTask, setMessageTask] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  console.log(tasks);

  const counterFinished = tasks.filter((item) => item.finished === true).length;

  const disableButton = messageTask.length > 0;

  function handleAddTask(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setMessageTask(event.target.value);
  }

  function handleCreateTask() {
    const newTask: Tasks = {
      id: Math.floor(Date.now() * Math.random()),
      message: messageTask,
      finished: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setMessageTask("");
  }

  function handleChecked(id: number) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === id;
    });

    const tempTasks = [...tasks];

    tempTasks[taskIndex].finished = !tempTasks[taskIndex].finished;

    setTasks(tempTasks);
  }

  function handleDelete(id: number) {
    const deleteTask = tasks.filter((item) => item.id != id);

    setTasks(deleteTask);
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => handleAddTask(e)}
          value={messageTask}
        />

        <button onClick={handleCreateTask} disabled={!disableButton}>
          Criar
          <PlusCircle size={18} weight={"bold"} />
        </button>
      </div>
      <div className={styles.tasksContent}>
        <div className={styles.info}>
          <Counter title={"Tarefas criadas"} total={tasks.length} />
          <Counter
            title={"Concluídas"}
            total={tasks.length}
            finished={counterFinished}
          />
        </div>
        {tasks.length ? (
          <div className={styles.tasks}>
            {tasks.map((item) => (
              <Tasks
                key={item.id}
                id={item.id}
                message={item.message}
                finished={item.finished}
                handleChecked={handleChecked}
                onDeleteTask={handleDelete}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
