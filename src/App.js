import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from './content/Layout';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </ChakraProvider>
  );
}

export default App;
