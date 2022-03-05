import React from 'react';
import Layout from './src/components/Layout';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider {...theme}>{element}</ChakraProvider>;
};
