// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Tasks = (props) => {
  const [state, setState] = useState({...props});

  // FIXME: APIを呼び出してデータを変更する
  const toggleCompleted = (id) => {
    const newTasks = state.tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
    setState({ tasks: newTasks });
  };

  return (
    <div className="todo-ap">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {state.tasks.map(task => {
          return <li key={task.id}>
              <button onClick={() => toggleCompleted(task.id)}>{task.completed ? "完了" : "未完了"}</button><span>{task.name}</span>
            </li>;
        })}
      </ul>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('resources-container')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Tasks {...data}/>,
    node,
  )
})
