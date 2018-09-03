import React from 'react'
import PropTypes from 'prop-types'
import {Paper} from 'components/Paper/Paper'
import {TaskBox} from 'components/Task/Box'

export const Board = ({tasks = [], className, title, addTask, remove, index, moveTask, dragStart}) => (
  <Paper deph={1} className={className} onDrop={moveTask} onDragOver={(event) => event.preventDefault()}>
    <div className="board-header">
      <h4>
        { title }
        <button onClick={() => addTask(null, index)}>
          +
        </button>
      </h4>
    </div>
    <div className="board-body" onDrop={moveTask}>
    {
      tasks.map((item, index) => (
        <div className="task-shadow" key={index} >
          <TaskBox key={index} className='task' id={item.id} remove={remove} dragStart={dragStart} >
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
  index: PropTypes.number,
  remove: PropTypes.func,
  addTask: PropTypes.func,
  dragStart: PropTypes.func,
  moveTask: PropTypes.func,
  title: PropTypes.string
}
