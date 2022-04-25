import React, { useState } from 'react';
import Nav from './components/HeadersFooters/Nav/index.js';
import View from './components/View/index.js';
import Footer from "./components/HeadersFooters/Footer/index.js";
// // import './App.css';

function App() {

  const [pages] = useState([
    { name: "About" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      {/* <Header> */}
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
      {/* </Header> */}
      <main>
        <View currentPage={currentPage}></View>
      </main>
      <Footer />
    </div>
  );
}


export default App;