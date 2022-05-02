import React from 'react';
import Header from '../common/Header';
import TopAlert from '../components/TopAlert';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box>
      <TopAlert />
      <Header />
    </Box>
  );
};

export default Layout;
