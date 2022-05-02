import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        _focus: {
          boxShadow: 'none',
        },
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: props => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
    Container: {
      baseStyle: {
        maxW: '1300px',
      },
    },
    Input: {
      baseStyle: {
        field: {
          _focus: {
            // borderColor: '#e94560',
            // outline: 'nonne',
            boxShadow: '0px 0px 1px #E94560',
            // outline: '2px solid #E94560',
          },
        },
      },
    },
  },
});

export default theme;
