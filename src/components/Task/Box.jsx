import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Paper
} from 'components/Paper/Paper'

const Box = (props) => (
  <Paper deph={props.deph} className={props.className} >
    <div className="box-content">
      {props.children}
    </div>
    <div className='box-button-container'>
      <button>edit</button>
      <button>delete</button>
    </div>
  </Paper>
)

export const TaskBox = styled(Box)`
  min-height: 100px;
  width: 100%;
  background-color: #FEFEFE;
  border-bottom: 4px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  border-right: 2px solid #ddd;
  .box-button-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
