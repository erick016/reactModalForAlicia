import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Forms from './forms';

const appElement = document.getElementById('example');

Modal.setAppElement('#example');

const examples = [

  Forms

];

class App extends Component {
  render() {
    return (
      <div>
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="example">
              
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);
