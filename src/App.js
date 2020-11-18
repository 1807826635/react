import React, { Component } from 'react';
import { Button,Radio  } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Radio>Radio</Radio>
      </div>
    );
  }
}

export default App;
