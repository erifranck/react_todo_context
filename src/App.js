import React, { Component } from 'react'
import styled from 'styled-components'
import {TaskBoard} from 'components'
import {TaskProvider, TaskConsumer} from 'providers'

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
  constructor() {
    super()
    this.state = {
      board: ["Todo", "In Progress", "Done"]
    }
  }
  render() {
    return (
        <DIV>
            {
              this.state.board.map(( item, index ) => (
                <TaskProvider key={index}>
                  <TaskConsumer>
                    {
                      ({tasks, set, update}) => (
                        <TaskBoard tasks={tasks} title={item} className='board' addTask={set} updateTask={update} />
                      )
                    }
                  </TaskConsumer>
                </TaskProvider>
              ))
            }
        </DIV>
    );
  }
}

export default App;
