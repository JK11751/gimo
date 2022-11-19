import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider,theme} from '@chakra-ui/react';
import Testimonials from './Components/Testimonials/Testimonials';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header';
import Contact from './Components/Contact/Contact';

const App=()=> {
  return (
    <>
    <ChakraProvider theme={theme}>
    <Router>
    <Header/>
        <Routes>
        <Route index element={<Home />} />
        <Route exact path='/projects' element={""} />
        <Route exact path='/skills' element={""} />
        <Route exact path='/resume' element={""} />
        <Route exact path='/testimonials' element={<Testimonials />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={""} />
        <Route exact path='/testimonials' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
