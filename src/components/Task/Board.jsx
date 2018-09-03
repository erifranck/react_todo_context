import React from 'react'
import PropTypes from 'prop-types'
import {Paper} from 'components/Paper/Paper'
import {TaskBox} from 'components/Task/Box'

export const Board = ({tasks = [], className, title, addTask}) => (
  <Paper deph={1} className={className} >
    <div class="board-header">
      <h4>
        { title }
        <button onClick={() => addTask()}>
          +
        </button>
      </h4>
    </div>
    <div className="board-body">
    {
      tasks.map((item, index) => (
        <div className="task-shadow" >
          <TaskBox key={index} className='task'>
            { item.name }
          </TaskBox>
        </div>
      ))
    }
    </div>
  </Paper>
)

Board.propTypes = {
  className: PropTypes.string,
  tasks: PropTypes.array,
  title: PropTypes.string
}
