// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

const Tasks = (props) => (
  <div className="todo-app">
    <h1>Todo List</h1>
    <ul className="todo-list">
      {props.tasks.map(task => {
        return <li key={task.id}>
          <button>{task.completed ? "完了" : "未完了"}</button><span>{task.name}</span>
          </li>;
      })}
    </ul>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('resources-container')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Tasks {...data}/>,
    node,
  )
})
