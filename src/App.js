import React from 'react';
import { ChakraProvider,theme} from '@chakra-ui/react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Project';
//import Skills from './Components/Skills/Skills';
//import testimonials from './Components/Data/TestimonialsList';
//import Testimonial from './Components/Testimonials/Testimonials';
//import Testimonials from './Components/Data/TestimonialsList';



const App=()=> {
  return (
    <>
    <ChakraProvider theme={theme}>
    <Header/>
    <Home/>
    <Skills/>
    <Project/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </ChakraProvider>
    </>
  );
}

export default App;
