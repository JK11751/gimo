import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider,theme} from '@chakra-ui/react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProjectCard from './Components/Cards/ProjectCard';


const App=()=> {
  return (
    <>
    <ChakraProvider theme={theme}>
    <Router>
    <Header/>
    <ProjectCard/> 
    {/*
        <Routes>
        <Route index element={<Home />} />
        <Route exact path='/projects' element={""} />
        <Route exact path='/skills' element={""} />
        <Route exact path='/resume' element={""} />
        <Route exact path='/testimonials' element={<Testimonials />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={""} />
        <Route exact path='/skills' element={<Skills/>} />
        <Route exact path='/error' element={<NotFound/>} />
        </Routes>*/}
        <Footer/>
      </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
