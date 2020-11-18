import React from 'react';
import {Button} from 'antd'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.props.history.push({
          pathname: '/',
          state: {
            id: 3
          }
        })}>回到home</Button>
      </div>
    )
  }
}