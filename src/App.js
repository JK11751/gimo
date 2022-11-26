import React from 'react';
import { ChakraProvider,theme} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import Skill from './Components/Skills/subs/Skill';
//import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonials/Testimonials';
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Project';
import Home from './Components/Home/Home';

const App=()=> {
  return (
    <>
    <ChakraProvider theme={theme}>
   <Router>
   <Header/>
    <Routes>
  <Route index element={<Home />} />
    <Route
      path="projects"
      element={<Project/>}
    />
    <Route path="testimonials" element={<Testimonial/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="skills" element={<Skill/>} />
</Routes>
<Footer/>
</Router>
    </ChakraProvider>
    </>
  );
}

export default App;
