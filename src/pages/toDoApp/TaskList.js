import React from "react";
import "./style/taskList.scss";

const TaskList = props => {
  const divClass = "task";

  const tasks = props.tasks.map(task => (
    <div className={`${divClass} ${task.priority}`} key={task.id}>
      <h5 className="task__title">Task: {task.body}</h5>
      <p className="task__note">Finish till: {task.date}</p>

      <button
        className="task__button btn btn-danger"
        onClick={() => props.deleteButton(task.id)}
      >
        X
      </button>
      <button
        onClick={() => props.finishTask(task.id)}
        className="task__button task__button--done btn btn-success"
      >
        Its done
      </button>
    </div>
  ));
  return <div className="taskList">{tasks}</div>;
};

export default TaskList;
