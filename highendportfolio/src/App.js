import React from 'react';
import Nav from './components/Nav/Nav.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom';

// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </>
  );
}


export default App;