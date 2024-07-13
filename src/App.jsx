import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { DataProvider } from './context/DataProvider'
import Home from './page/homePage/Home'

function App() {

  return (
    <>
            <DataProvider>
    <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                  <Home/>
      </ChakraProvider>
            </DataProvider>
    </>
  )
}

export default App
