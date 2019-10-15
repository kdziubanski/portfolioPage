import React from "react";
import "./style/taskDone.scss";

const TasksDone = props => {
  const tasksdone = props.tasksDone.map(task => (
    <div key={task.id} className="finishedTask">
      <h5 className="finishedTask__title">{task.body}</h5>
      <p className="finishedTask__date">
        You have done this task: {props.date}
      </p>
      <button
        className="finishedTask__button"
        type="button"
        onClick={() => props.deleteDoneTask(task.id)}
      >
        X
      </button>
    </div>
  ));
  return (
    <div className="taskDone">
      <h1 className="taskDone__title">Tasks Done</h1>
      {tasksdone}
    </div>
  );
};

export default TasksDone;
