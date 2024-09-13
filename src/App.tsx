import { MantineProvider } from '@mantine/core';

import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import InfoBlockProps from './assets/infoBockAssets/infoBlockObj'

import Header from './components/Header/Header'
import Banner from './components/Body/Banner';
import CarouselComponent from './components/Body/Carousel';
import MyStory from './components/Body/MyStory';
import WhatIDo from './components/Body/WhatIDo';
import Services from './components/Body/Services';
import InfoBlocks from './components/Body/InfoBlocks';


function App() {

  return (
    <MantineProvider>
      <Header />
      <Banner />
      <CarouselComponent />
      <MyStory />
      <WhatIDo />
      <Services />
      {InfoBlockProps.map((e) => {
        return <InfoBlocks id={e.id} title={e.title} text={e.text} buttonText={e.buttonText}/>
      })}
    </MantineProvider>
  )
}

export default App
