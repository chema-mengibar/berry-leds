import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'shared/theme.shared';
import ReactCursorPosition from 'react-cursor-position';

const RgbColorRange = styled.div`
  display:flex;
  height:40px;
  width:100%;
  margin-top:20px;
  position:relative;
  float:left;
`
const ColorRangeBar = styled.div`
  height:100%;
  flex-grow:1;
  background-color: rgba( ${theme.color.grey_dark}, .1 );
  cursor:pointer;
`

const ColorRangeCursor = styled.div`
  width:  ${props => props.procent + '%'};
  height:100%;
  background-color: ${props => props.color };
  -webkit-transition: width ${props => props.procent}ms ease-out;
  -ms-transition: width 400ms ease-out;
  transition: width 400ms ease-out;
`

const ColorRangeValue = styled.div`
  width:40px;
  height: 100%;
  background-color: rgb(${theme.color.grey_dark});
  color:rgb(  ${theme.color.light} );
  line-height:40px;
  text-align:center;
`

const ColorBarWrapper = (
  {
    rgbColor = { name:'white', color:'#ffffff'  },
    mode = 'pwm'
  }
) => {
  const [ rgbChannels, setRgbChannels] = useState( {
    red:0,
    green:0,
    blue:0,
  } );

  console.log( rgbChannels )

  const modeMap = {
    pwm: 100,
    dec: 255,
    hex: 255
  };
  

  const onClickChannel = ( channelValue, channelName ) => {
    setRgbChannels( prevState =>{ 
      return { ...prevState, [channelName]: channelValue }
    } )
  }

  const valueConversion = ( value ) => {
    let conversion;
    if( mode === 'dec' || mode === 'hex' ){
      conversion =  Math.round(( value*100)/255);
    }else{
      conversion = value;
    }
    return conversion;
  }

  //.toString(16);

  return (
    <RgbColorRange>
      <ColorRangeBar onClick={(e)=> { 
          let coor = Math.round( (e.nativeEvent.offsetX * modeMap[mode] ) / e.currentTarget.getBoundingClientRect().width);
          onClickChannel( coor, rgbColor.name ) 
        } } >
        <ColorRangeCursor color={ rgbColor.color } procent={ valueConversion( rgbChannels[ rgbColor.name ] ) }></ColorRangeCursor>
      </ColorRangeBar>
      <ColorRangeValue> { rgbChannels[ rgbColor.name ] } </ColorRangeValue>
    </RgbColorRange>
  )
}

export default ColorBarWrapper;