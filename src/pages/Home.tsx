// src/pages/HomePage.tsx
import TimeTracker from 'components/TimeTracker';
import React from 'react';

const HomePage: React.FC = () => {
  return (<>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-lg">This is the Home Page. Navigate using the menu above.</p>
    </div>
  <div className="timeTracker">
    <TimeTracker/>
  </div>
  </>
  );
};

export default HomePage;