import React from 'react';
import { ChakraProvider,theme} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import Header from  './Components/Header/Header'
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Project';
import LandingPage from './Components/Landing/LandingPage';

const App=()=> {
  return (
    <>
    <ChakraProvider theme={theme}>
   <Router>
   <Header/>
    <Routes>
  <Route index element={<LandingPage />} />
    <Route
      path="projects"
      element={<Project/>}
    />
    <Route 
    path="testimonials" element={<Testimonial/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="skills" element={<Skills/>} />
</Routes>
<Footer/>
</Router>
    </ChakraProvider>
    </>
  );
}

export default App;
