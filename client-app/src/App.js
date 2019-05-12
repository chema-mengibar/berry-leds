import React, { useState } from 'react';
import AppWrapper from './components/AppWrapper/AppWrapper';
import BlockLed from './components/BlockLed/BlockLed';
import BlockControl from './components/BlockControl/BlockControl';

const App = () => {
  return(
    <AppWrapper>
      <BlockLed/>
      <BlockControl/>
    </AppWrapper>
  );
};

export default App;