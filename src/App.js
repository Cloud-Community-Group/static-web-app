import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Addbookdetails from './components/Addbookdetails';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/addbook" element={<Addbookdetails />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
