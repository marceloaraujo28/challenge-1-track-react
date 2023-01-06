import { useState } from "react";
import styles from "./Tasks.module.css";
import { Trash, CheckCircle, Circle } from "phosphor-react";

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
        {finished ? (
          <CheckCircle onClick={onHandleChecked} size={18} color={"#5E60CE"} />
        ) : (
          <Circle onClick={onHandleChecked} color={"#4EA8DE"} size={18} />
        )}
      </div>

      <p className={styleFont}>{message}</p>

      <button onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
