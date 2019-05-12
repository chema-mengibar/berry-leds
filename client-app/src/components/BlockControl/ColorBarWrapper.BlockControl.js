import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import theme from 'shared/theme.shared';

import { connect } from 'react-redux';
import { setChannel, setColor } from 'store/actions.store';

const mapStateToProps = (state, ownProps) => ({
  // rgbColor: ownProps.rgbColor,
  // mode: ownProps.mode,
  ...ownProps,
  channels: state.appState.channels,
});

const mapDispatchToProps = {
  setChannel: setChannel,
}

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
  cursor:pointer;
`

const ColorBarWrapper = ( props
  //{ rgbColor = { name:'white', color:'#ffffff'  },  mode = 'pwm' }
) => {

  const  rgbColor = props.rgbColor; //{ name:'red', color:'#ff0000'  };
  const mode = props.mode; // 'pwm';

  const [ rgbChannel, setRgbChannel] = useState( props.channels[ rgbColor.name ] );
  const modeMap = {
    pwm: 100,
    dec: 255,
    hex: 255
  };

  useEffect(() => {
    props.setChannel( rgbChannel, rgbColor.name )
  }, [rgbChannel]);


  const valueConversion = ( value ) => {
    let convertedValue =  Math.round(( value * modeMap[mode])/ 100);
    if (mode === 'hex'){
      let hex =  convertedValue.toString(16).toUpperCase();
      convertedValue = ( hex.length === 1 ) ?  '0'+hex : hex;
    }  
    return convertedValue;
  }

  return (
    <RgbColorRange>
      <ColorRangeBar onClick={(e)=> { 
          let yCursorPosition = Math.round( (e.nativeEvent.offsetX * 100 ) / e.currentTarget.getBoundingClientRect().width);
          setRgbChannel( yCursorPosition );
        } } >
        <ColorRangeCursor color={ rgbColor.color } procent={ rgbChannel }></ColorRangeCursor>
      </ColorRangeBar>
      <ColorRangeValue onClick={(e)=> { 
          let xtremValue = (rgbChannel === 100 )? 0 : 100;
          setRgbChannel( xtremValue );
        } } > { valueConversion( rgbChannel ) } </ColorRangeValue>
    </RgbColorRange>
  )
}

export default connect( mapStateToProps, mapDispatchToProps )( ColorBarWrapper )