import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Kanit, sans-serif',
    body: 'Kanit, sans-serif',
  },
  styles: {
    global: {
      body: {
       bg: 'gray.900',
       color: 'gray.50'
      }
    }
  }
})