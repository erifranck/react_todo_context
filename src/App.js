import React, { Component } from 'react'
import styled from 'styled-components'
import {TaskBoard} from 'components'

const DIV = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .board {
    margin-left: 100px;
  }
`
class App extends Component {
  render() {
    return (
      <DIV>
        <TaskBoard tasks={["task1", "task2", "task3"]} title='Todo' className='board' />
        <TaskBoard tasks={[]} title='In Progress' className='board' />
        <TaskBoard tasks={[]} title='Done' className='board' />
      </DIV>
    );
  }
}

export default App;
