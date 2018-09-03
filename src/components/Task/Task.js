import styled from 'styled-components'
import {TaskBox as Box} from './Box'
import {Board} from './Board'

export const TaskBox = Box
export const TaskBoard = styled(Board)`
  min-height: 500px;
  width: 300px;
  padding: 20px;
  .board-header {
    height: 50px;
    padding: 0px 10px;
    h4 {
      margin: 0px;
    }
  }
  .board-body {
    padding: 0px 10px;
    min-height: 200px;
    .task {
      margin-bottom: 20px;
      .task-shadow {
        background: #ccc;
      }
    }
  }
`
