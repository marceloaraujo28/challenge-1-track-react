import styles from "./EmptyState.module.css";
import EmptySvg from "../assets/empty.svg";

export function EmptyState() {
  return (
    <div className={styles.emptyContent}>
      <img src={EmptySvg} />

      <div className={styles.messageContent}>
        <p>
          <b>Você ainda não tem tarefas cadastradas</b>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
