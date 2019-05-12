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
`

const ColorBarWrapper = ( props
  // { rgbColor = { name:'white', color:'#ffffff'  },  mode = 'pwm' }
) => {

  const  rgbColor = props.rgbColor; //{ name:'red', color:'#ff0000'  };
  const mode = props.mode; // 'pwm';

  const [ rgbChannel, setRgbChannel] = useState( 0 );
  const modeMap = {
    pwm: 100,
    dec: 255,
    hex: 255
  };

  useEffect(() => {
    props.setChannel( rgbChannel, rgbColor.name )
  }, [rgbChannel]);


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
          let yCursorPosition = Math.round( (e.nativeEvent.offsetX * modeMap[mode] ) / e.currentTarget.getBoundingClientRect().width);
          setRgbChannel( yCursorPosition );
        } } >
        <ColorRangeCursor color={ rgbColor.color } procent={ valueConversion( rgbChannel ) }></ColorRangeCursor>
      </ColorRangeBar>
      <ColorRangeValue> { rgbChannel } </ColorRangeValue>
    </RgbColorRange>
  )
}

export default connect( mapStateToProps, mapDispatchToProps )( ColorBarWrapper )