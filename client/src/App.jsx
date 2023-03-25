/* eslint-disable max-len */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Colors from './Colors';
import Color from './Color';
import Pagination from './Pagination';
import './style.css';

function App() {
  const [colors, setColors] = useState([]);
  const [click, setClick] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const colorsPerPage = 12;

  // this fetch is commented out so that I could get the hosting completed per to guidelines.
  // I did not have time to deploy my server so I had to find a work around so that you could visualize the front end.
  // Basically, I am building an array of hex codes to pass into my swatch function rather than calling my database. (the database does work!)
  // useEffect(() => {
  //   const fetchColors = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3333/');
  //       console.log('res', res);
  //       setColors(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchColors();
  // }, []);

  const indexOfLastColor = currentPage * colorsPerPage;
  const indexOfFirstColor = indexOfLastColor - colorsPerPage;
  const currentColors = colors.slice(indexOfFirstColor, indexOfLastColor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <Header setClick={setClick} />
      <div className="body-container">
        <Sidebar setClick={setClick} />
        <div className="swatch-container">
          {!click ? <Colors colors={currentColors} setColors={setColors} setClick={setClick} currentPage={currentPage} colorsPerPage={colorsPerPage} /> : <Color click={click} setClick={setClick} />}
          {!click && (
          <Pagination
            currentPage={currentPage}
            colorsPerPage={colorsPerPage}
            // totalColors={colors.length}
            totalColors={150}
            paginate={paginate}
          />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
