// // // import Button from '@components/Button';
// // // import Button from '@components/';
// // // import Button from '@/components/Button';
// // import React from 'react';
// // import Button from './components/Button';
// // // import Button from 'components/Button';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from 'components/NavBar';
// import SideBar from 'components/SideBar';

// // fun
// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <SideBar /> {/* Add the SideBar component here */}
//         <div className="flex-grow ml-64"> {/* Apply margin to account for SideBar width */}
//           <NavBar />
//           <div className="container mx-auto mt-4">
//             <Routes>
//               <Route path="/" element={<h1>Home Page</h1>} />
//               <Route path="/about" element={<h1>About Page</h1>} />
//               <Route path="/contact" element={<h1>Contact Page</h1>} />
//               <Route path="/profile" element={<h1>Profile Page</h1>} />
//               <Route path="/settings" element={<h1>Settings Page</h1>} />
//               <Route path="/logout" element={<h1>Logout Page</h1>} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar /> {/* NavBar at the top, full width */}
        <div className="flex flex-grow">
          <SideBar /> {/* SideBar on the left */}
          {/* <main className="flex-grow p-4 overflow-y-auto">
           */}
           <main className="flex-grow ml-64 mt-16 p-4 overflow-y-auto">

            {/* Main content area, taking up remaining space */}
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<h1>About Page</h1>} />
              <Route path="/contact" element={<h1>Contact Page</h1>} />
              <Route path="/profile" element={<h1>Profile Page</h1>} />
              <Route path="/settings" element={<h1>Settings Page</h1>} />
              <Route path="/logout" element={<h1>Logout Page</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
