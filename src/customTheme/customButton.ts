import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'base', 
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, 
      py: 3, 
    },
    md: {
      fontSize: 'md',
      px: 6, 
      py: 4, 
    },
  },

  variants: {
    link: {
      _hover: {
        color: "yellow.400"
      }
    },
    outline: {
      border: '2px solid',
      borderColor: 'yellow.400',
          color: 'yellow.400',
      _hover: {
          bg: "yellow.400",
          color: "white"
      }
    },
    solid: {
      bg: 'yellow.400',
        color: 'white',
        _hover: {
          bg: "yellow.500",
      }
    },
  },

  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
})

export default Button