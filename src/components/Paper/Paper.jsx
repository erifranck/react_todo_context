import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #eee;
  box-shadow: -19px 17px 82px -31px rgba(0,0,0,0.75);
`

export const Paper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

Paper.propTypes = {
  children: PropTypes.node
}
