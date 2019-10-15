import React from "react";
import "./style/addTask.scss";

const AddTask = props => {
  const taskClass = `form__important-button ${props.priority} `;
  return (
    <div className="tasks-adder">
      <form className="form" noValidate onSubmit={props.validate}>
        <h1 className="form__title">ToDo App by Dziubas</h1>
        <span className="form__span">New Task</span>
        <br />
        <textarea
          className="form__textArea"
          name="task"
          id="textInput"
          value={props.task}
          onChange={props.inputHandler}
          aria-label="With textarea"
        ></textarea>
        <div className="form__priority">Priority</div>
        <div>
          <input
            className="form__input"
            type="range"
            min="0"
            max="100"
            value={props.range}
            onChange={props.sliderHandler}
          />
        </div>
        <span
          disabled
          // className={props.priority}
          className={taskClass}
        >
          {props.priority}
        </span>
        <input
          className="form__date"
          name="acctualDate"
          type="date"
          min={props.date}
          max="2020-12-31"
          value={props.acctualDate}
          onChange={props.inputHandler}
        ></input>

        <button className="form__addTask">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
