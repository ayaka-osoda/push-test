// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import { useState } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Button } from '../components';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  tasks: Task[];
}

function Tasks(props: Props) {
  const [state, setState] = useState({ ...props });

  const updateTask = (task: Task) => {
    fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: task.id,
        completed: !task.completed,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.clone().json())
      .then((responseData) => {
        setState({ tasks: responseData });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="todo-ap">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {state.tasks.map((task) => (
          <li key={task.id}>
            <Button onClick={() => updateTask(task)}>
              {task.completed ? '完了' : '未完了'}
            </Button>
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const container = document.getElementById('resources-container');
const root = createRoot(container);
const data = JSON.parse(container.getAttribute('data'));
root.render(<Tasks {...data} />);