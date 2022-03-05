import { extendTheme } from '@chakra-ui/react';

import '@fontsource/montserrat/variable.css';
import '@fontsource/poppins';
import '@fontsource/noto-sans';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Poppins, sans-serif',
  },
  config: {
    cssVarPrefix: '',
    // useSystemColorMode: true,
  },
});

export default theme;
