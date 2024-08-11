import React, { useState } from 'react';

const TimeTracker: React.FC = () => {
  const [totalHours, setTotalHours] = useState<number>(24);
  const [usedHours, setUsedHours] = useState<number>(0);
  const [areas, setAreas] = useState<{ area: string, hours: number }[]>([
    { area: 'Work', hours: 0 },
    { area: 'Exercise', hours: 0 },
    { area: 'Leisure', hours: 0 },
  ]);

  const remainingHours = totalHours - usedHours;

  const updateHours = (index: number, newHours: number) => {
    const updatedAreas = [...areas];
    const totalUsedHoursBeforeUpdate = updatedAreas.reduce((sum, area) => sum + area.hours, 0);
    const remainingHoursBeforeUpdate = totalHours - totalUsedHoursBeforeUpdate;

     // Ensure new hours don't make the remaining hours negative
     if (newHours >= 0 && newHours <= remainingHoursBeforeUpdate + updatedAreas[index].hours) {
        updatedAreas[index].hours = newHours;
        const totalUsedHours = updatedAreas.reduce((sum, area) => sum + area.hours, 0);
        setUsedHours(totalUsedHours);
        setAreas(updatedAreas);
      

  };
  }
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Time Tracker</h1>
      <p className="mb-2">Total Hours: {totalHours}</p>
      <p className="mb-4">Remaining Hours: {remainingHours}</p>

      <div className="space-y-4">
        {areas.map((area, index) => (
          <div key={index} className="flex items-center space-x-2">
            <label className="w-24 font-medium">{area.area}:</label>
            <input
              type="number"
              value={area.hours}
              onChange={(e) => updateHours(index, parseInt(e.target.value) || 0)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
