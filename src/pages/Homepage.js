import React from 'react'
import Entertainment from '../components/Entertainment';
import Home from '../components/Home';
import Ileoba from '../components/Ileoba';
import Malachimasterclass from '../components/Malachimasterclass';
import Navbar from '../components/Navbar';
import Pofnews from '../components/Pofnews';
import Politics from '../components/Politics';
import Sports from '../components/Sports';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="contain">
              <Home />
              <Pofnews />
              <Sports />
              <Ileoba />
              <Politics />
              <Entertainment />
              <Malachimasterclass />
            </div>
        </div>
    )
}

export default Homepage
