// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.50" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme