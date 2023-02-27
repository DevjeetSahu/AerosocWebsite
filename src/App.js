import React from 'react';

import Navbar from './Components_home/Navbar.js';
import OneMain from './Components_home/OneMain.js';
import Carousel from './Components_home/subcomponent_2/Carousel.js';
import Noticeboard from './Components_home/Noticeboard.js';


const notices = [
  "Pyaar pe toh duniya khayam hein",
  "Ek sindoor ka kimath thum kya jaano ramesh babu"
];
const sliders = [
  'https://media.istockphoto.com/id/1301151581/photo/adaptive-and-responsive-web-design-concept-showing-sample-website-on-different-tech-gadgets.jpg?s=1024x1024&w=is&k=20&c=Z2gasXXnp5Xx8Wr8TqNUwX-CtLLxXWCEeFfIpq7X3qk=',
  'https://via.placeholder.com/500x300?text=Image+2',
  'https://via.placeholder.com/500x300?text=Image+3',
];
function App() {
  return (
    <div className="page">
      <div>
        <Navbar />
      </div>
      <div className="App">
          <div>
            <OneMain />
          </div>
          <div>
            <Carousel slider = {sliders}/>
          </div>
          <div>
            <Noticeboard notices = {notices} />
          </div>
      </div>
    </div>
  );
}

export default App;
