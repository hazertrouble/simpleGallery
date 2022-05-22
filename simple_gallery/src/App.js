//import {useState} from 'react';
import LightGallery from 'lightgallery/react'; 

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './App.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function App() {
  const onInit = () => {
      console.log('lightGallery has been initialized');
  };/*
  const [items, setItems] = useState([ 
    {
        id: '1',
        size: '1400-933',
        src: '../images/wallpaper_1.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '2',
        size: '1400-933',
        src: '../images/wallpaper_2.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '3',
        size: '1400-933',
        src: '../images/wallpaper_3.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '4',
        size: '1400-933',
        src: '../images/wallpaper_4.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '5',
        size: '1400-933',
        src: '../images/wallpaper_5.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '6',
        size: '1400-933',
        src: '../images/wallpaper_6.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }, {
        id: '7',
        size: '1400-933',
        src: '../images/wallpaper_7.jpg',
        thumb: 'https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg',
    }
  ]);*/

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]} 
        >
          <a href="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg">
            <img className="img" alt="img1" src="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg" />
          </a>
          <a href="#">
            <img className="img" alt="img1" src="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg" />
          </a>
          <a href="#">
            <img className="img" alt="img1" src="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg" />
          </a>
        </LightGallery>
      </header>
    </div>
  );
}
/*

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]} 
      >
        <a href="#">
          <img alt="img1" src="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg" />
        </a>
        <a href="#">
          <img alt="img2" src="https://picjumbo.com/wp-content/uploads/wheat-field-free-photo-2210x1473.jpg" />
        </a>
      </LightGallery>
 */
export default App;
