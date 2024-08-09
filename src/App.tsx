// // import Button from '@components/Button';
// // import Button from '@components/';
// // import Button from '@/components/Button';
// import React from 'react';
// import Button from './components/Button';
// // import Button from 'components/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from 'components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
          <Route path="/logout" element={<h1>Logout Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

