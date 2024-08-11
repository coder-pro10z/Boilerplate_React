// import React from 'react';
// import { Link } from 'react-router-dom';
// import Menu from './Menu'; // Assuming you have a Menu component

// const NavBar: React.FC = () => {
//   return (
//     <header className="w-full bg-blue-600 text-white fixed top-0 left-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center space-x-4">
//           {/* Add an icon or logo here */}
//           <span className="font-bold text-xl">MyApp</span>
//         </div>
//         <Menu />
//       </div>
//     </header>
//   );
// };

// export default NavBar;

// import React from 'react';
// import Menu from './Menu';
// import { FaIcons } from 'react-icons/fa';
// // import Menu from '/Menu'; // Assuming you have a Menu component

// const NavBar: React.FC = () => {
//   return (
//     <header className="w-full bg-blue-600 text-white shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center space-x-4">
//         <div className="flex items-center space-x-4">
//           {/* Add an icon before the MyApp text */}
//           <FaIcons /> {/* Replace FaBars with your desired icon */}
//           <span className="font-bold text-xl">MyApp</span>
//         </div>
//           {/* <span className="font-bold text-xl">MyApp</span> */}
//         </div>
//         <Menu />
//       </div>
//     </header>
//   );
// };

// export default NavBar;
import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import { FaHome } from 'react-icons/fa'; // Example icon

const NavBar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Map paths to page titles
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      case '/logout':
        return 'Logout';
      default:
        return 'MyApp'; // Default title
    }
  };

  return (
    <header className="w-full bg-blue-600 text-white shadow-md z-50 fixed">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* Icon or logo on the left */}
          <FaHome /> {/* Replace with your desired icon */}
          <span className="font-bold text-xl">MyApp</span>
        </div>
        {/* Dynamic title in the center */}
        <div className="flex-1 text-center">
          <span className="text-lg font-semibold">{getPageTitle(path)}</span>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default NavBar;
