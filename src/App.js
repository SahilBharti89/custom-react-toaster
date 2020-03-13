import React, { useState } from 'react';
import './App.css';
import Toast from './components/toast/Toast';
import Button from './components/button/Button';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

function App() {
  let [list, setList] = useState([]);
  const [position, setPosition] = useState();

  const buttonsList = [
    {
      id: 1,
      type: 'success',
      className: 'success',
      label: 'Success'
    },
    {
      id: 2,
      type: 'danger',
      className: 'danger',
      label: 'Danger'
    },
    {
      id: 3,
      type: 'info',
      className: 'info',
      label: 'Info'
    },
    {
      id: 4,
      type: 'warning',
      className: 'warning',
      label: 'Warning'
    },
  ];

  const showToast = type => {
    const id = Math.floor((Math.random() * 100) + 1);
    let toastProperties = null;

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: checkIcon
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Error',
          description: 'This is an error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: infoIcon
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        }
        break;
      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  }

  const selectPosition = (event) => {
    setPosition(event.target.value);
    setList([]);
  }

  return (
    <div className="App">
      <div className="app-header">
        <p>React Toast Component</p>
        <div className="toast-buttons">
          {
            buttonsList.map(button =>
              <Button
                key={button.id}
                className={button.className}
                label={button.label}
                handleClick={() => showToast(button.type)}
              />
            )
          }
        </div>
        <div className="select">
          <select
            name="position"
            value={position}
            onChange={selectPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
        <Toast toastList={list} position={position} />
      </div>
    </div>
  );
}

export default App;
