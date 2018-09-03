import React from 'react'
import PropTypes from 'prop-types'
import {Paper} from 'components/Paper/Paper'

export const Box = (props) => (
  <Paper deph={props.deph} className={props.className} >
    {props.children}
    <button>edit</button>
    <button>delete</button>
  </Paper>
)

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
