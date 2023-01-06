import { useState } from "react";
import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";

interface TasksProps {
  id: number;
  message: string;
  finished: boolean;
  handleChecked: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Tasks({
  id,
  message,
  finished,
  handleChecked,
  onDeleteTask,
}: TasksProps) {
  function onHandleChecked() {
    handleChecked(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  const styleFont = finished
    ? styles.messageFinished
    : styles.messageNoFinished;

  return (
    <div className={styles.tasksContent}>
      <div className={styles.check}>
        <input
          type="checkbox"
          checked={finished}
          onChange={onHandleChecked}
        ></input>
      </div>

      <p className={styleFont}>{message}</p>

      <button onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
