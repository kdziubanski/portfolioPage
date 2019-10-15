import React, { Component } from "react";
import TaskList from "./toDoApp/TaskList";
import "../style/ToDoApp.scss";
import TasksDone from "./toDoApp/TasksDone";
import AddTask from "./toDoApp/AddTask";

class ToDo extends Component {
  date = new Date().toISOString().slice(0, 10);
  counter = 2;
  state = {
    tasks: [
      {
        id: 1,
        body: "Example Task",
        priority: "important",
        date: "2019-12-31"
      }
    ],
    range: 0,
    priority: "low",
    acctualDate: "",
    task: "",
    tasksDone: []
  };

  // setup range priority
  sliderHandler = e => {
    if (e.target.value <= 33) {
      this.setState({
        range: e.target.value,
        priority: "low"
      });
    } else if (e.target.value > 33 && e.target.value <= 66) {
      this.setState({
        range: e.target.value,
        priority: "medium"
      });
    } else if (e.target.value > 66) {
      this.setState({
        range: e.target.value,
        priority: "important",
        date: ""
      });
    }
  };

  //setup inputs
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // submit button create object and add it to array
  validate = e => {
    e.preventDefault();
    if (this.state.task.length === 0 || this.state.acctualDate.length === 0) {
      alert("You have to fill task and date field");
    } else {
      let tasks = this.state.tasks;
      const task = {
        id: this.counter,
        body: this.state.task,
        priority: this.state.priority,
        date: this.state.acctualDate
      };
      tasks = tasks.concat(task);
      this.setState({
        tasks,
        range: 0,
        priority: "low",
        acctualDate: "",
        task: ""
      });
      this.counter++;
    }
  };
  //deleting task button
  deleteButton = e => {
    let tasks = this.state.tasks;
    let numb = 1;
    const task = this.state.tasks.map(task => {
      if (task.id === e) {
        numb = tasks.indexOf(task);
        return numb;
      }
    });
    tasks.splice(numb, 1);
    this.setState({
      tasks
    });
  };

  //finishing task button
  finishTask = e => {
    const task = this.state.tasks.filter(task => task.id === e);
    let tasksDone = this.state.tasksDone.concat(task);

    let index = 1;
    let tasks = this.state.tasks;
    let taski = this.state.tasks;
    taski = taski.map(task => {
      if (task.id === e) {
        index = taski.indexOf(task);
        return index;
      }
    });
    tasks.splice(index, 1);
    this.setState({
      tasksDone,
      tasks
    });
  };
  //delete done task
  deleteDoneTask = e => {
    let tassDone = this.state.tasksDone;
    let numb = 1;

    tassDone = tassDone.map(task => {
      if (task.id === e) {
        numb = tassDone.indexOf(task);
        return numb;
      }
    });
    let tasksDone = this.state.tasksDone;
    tasksDone.splice(numb, 1);

    this.setState({
      tasksDone
    });
  };

  render() {
    const { tasks, range, priority, acctualDate, task } = this.state;
    return (
      <div className="toDo__container">
        <AddTask
          date={this.date}
          sliderHandler={this.sliderHandler}
          validate={this.validate}
          inputHandler={this.inputHandler}
          tasks={tasks}
          range={range}
          priority={priority}
          acctualDate={acctualDate}
          task={task}
        />
        <TaskList
          tasks={tasks}
          deleteButton={this.deleteButton}
          finishTask={this.finishTask}
        />
        {/* <section className="toDo__doneSection"> */}
        <TasksDone
          date={this.date}
          tasksDone={this.state.tasksDone}
          deleteDoneTask={this.deleteDoneTask}
        />
        {/* </section> */}
      </div>
    );
  }
}

export default ToDo;
