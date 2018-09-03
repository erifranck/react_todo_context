import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #eee;
  box-shadow: -19px 17px 82px -31px rgba(0,0,0,0.1);
`

export const Paper = (props) => (
  <Wrapper className={props.className} draggable={props.draggable} onDragOver={props.onDragOver} onDrag={props.dragStart} onDrop={props.onDrop}>
    {props.children}
  </Wrapper>
)

Paper.propTypes = {
  children: PropTypes.node,
  draggable: PropTypes.bool,
  onDrop: PropTypes.func,
  onDragOver: PropTypes.func,
  dragStart: PropTypes.func,
  className: PropTypes.string
}
