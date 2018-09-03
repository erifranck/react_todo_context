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
    }
  }
  render() {
    return (
        <DIV>
          <TaskProvider>
            <TaskConsumer>
              {
                ({boards, tasks, set, update, remove, findBoard, changeBoard, dragStart, dragId}) => (
                  boards.map((item, index) => (
                    <TaskBoard
                      key={index}
                      tasks={findBoard(index)}
                      title={item}
                      className='board'
                      addTask={set}
                      moveTask={() => changeBoard(dragId, index)}
                      dragStart={dragStart}
                      index={index}
                      updateTask={update}
                      remove={remove} />
                  ))
                )
              }
            </TaskConsumer>
          </TaskProvider>
        </DIV>
    );
  }
}

export default App;
