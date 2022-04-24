import React, { useState } from 'react';
import Nav from './components/Nav/index.js';
import Layout from './components/Layout/index.js';
// import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
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
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      {/* </Header> */}
      <main>
        <Layout currentPage={currentPage}></Layout>
      </main>
      <Footer />
    </div>
  );
}


export default App;