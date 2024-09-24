import { MantineProvider, createTheme, DEFAULT_THEME } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './assets/Fonts/fonts.css'

import Homepage from './pages/HomePage';
import BoardAndTrain from './pages/BoardAndTrain';
import DogTraining from './pages/DogTraining';
import Faq from './pages/Faq';
import OvernightBoarding from './pages/OvernightBoarding';
import ContactMe from './pages/ContactMe';
import RatesPage from './pages/Rates';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `Open Sans, ${DEFAULT_THEME.fontFamily}`,
  },
  components: {
    Title: {
      styles: () => ({
        root: {
          fontFamily: 'Tenor Sans, Georgia, serif',
        },
      }),
    },
    Text: {
      styles: () => ({
        root: {
          fontFamily: 'Tenor Sans, Georgia, serif',
        },
      }),
    },
  },
})


function App() {

  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/board-&-train' element={<BoardAndTrain />} />
          <Route path='/training' element={<DogTraining />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/overnight-boarding' element={<OvernightBoarding />} />
          <Route path='/contact-me' element={<ContactMe />} />
          <Route path='/rates' element={<RatesPage />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
