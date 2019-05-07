import React, { useState } from 'react';
import AppWrapper from './components/AppWrapper/AppWrapper';
import BlockLed from './components/BlockLed/BlockLed';
import BlockControl from './components/BlockControl/BlockControl';

const App = () => {

  const [ color, setColor] = useState('#FFFFFF');

  return(
    <AppWrapper>
      <BlockLed color={ color } />
      <BlockControl clicked={(color) => setColor(color)} />
    </AppWrapper>
  );
};


export default App;