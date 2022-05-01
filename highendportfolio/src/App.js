import React from 'react';
import Nav from './components/HeadersFooters/Nav/index.js';
import View from './components/View/index.js';
import Footer from "./components/HeadersFooters/Footer/index.js";
// // import './App.css';

function App() {

  // const [pages] = useState([
  //   { name: "About" },
  //   { name: "portfolio" },
  //   { name: "contact" },
  //   { name: "resume" }
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Nav />
      <main>
        <View />
      </main>
      <Footer />
    </div>
  );
}


export default App;