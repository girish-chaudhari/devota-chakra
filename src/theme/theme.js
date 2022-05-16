import { extendTheme } from '@chakra-ui/react';

const Menu = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ['menu', 'item', 'list'],
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      rounded: 'lg',
      flexDirection: 'column',
      py: '2',
    },
    item: {
      padding: '0.5rem 1rem',
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'rgb(43, 52, 69)',
      fontSize: '14px',
      _hover: {
        color: 'rgb(233, 69, 96)',
        bg: 'rgb(246, 249, 252)',
      },
    },
    list: {
      borderRadius: '6px',
      border: 'none',
      boxShadow: 'rgb(0 0 0 / 16%) 0px 6px 12px',
    },
  },
  sizes: {
    sm: {
      item: {
        fontSize: '0.75rem',
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: '0.875rem',
        px: 3,
        py: 2,
      },
    },
  },
  variants: {
    bold: {
      item: {
        fontWeight: 'bold',
      },
      menu: {
        boxShadow: 'xl',
      },
    },
    colorful: {
      item: {
        color: 'orange.600',
      },
      menu: {
        bg: 'orange.100',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

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
        // solid: props => ({
        //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        // }),
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
    Menu,
  },
});

export default theme;
