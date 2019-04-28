import styled, { css } from 'styled-components';
import React from 'react';
import type { RangeColorsTypes } from './RangeColors.types'

// const StyledHeadline = styled.h1`
//   ${ ( props ) => ( (props.active == true) && css`
//     border: 1px solid red;
//   `)}
//   font-size: 25px;
//   margin-bottom: 15px;
//   color:red;
// `;

const StyledHeadline = ( props ) => {
  return (
    <div> { props.active? 'yes' : 'no' } { props.children }</div>
  )
}

const RangeColors = ( 
  {
    red = { min:0, max: 0, label: 'red', color:'red' },
    green = { min:0, max: 0, label: 'green', color:'green' },
    blue = { min:0, max: 0, label: 'blue', color:'blue' }
  }:RangeColorsTypes
) => {
 
  return (

    <div>
      <StyledHeadline active={false} > { red.label } , { red.min }</StyledHeadline>
    </div>
  )
}

export default RangeColors;