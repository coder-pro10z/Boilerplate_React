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

  // Function to update hours for a specific area
  const updateHours = (index: number, newHours: number) => {
    const updatedAreas = [...areas];
    updatedAreas[index].hours = newHours;

    const totalUsedHours = updatedAreas.reduce((sum, area) => sum + area.hours, 0);
    setUsedHours(totalUsedHours);
    setAreas(updatedAreas);
  };

  return (
    <div>
      <h1>Time Tracker</h1>
      <p>Total Hours: {totalHours}</p>
      <p>Remaining Hours: {remainingHours}</p>

      <div>
        {areas.map((area, index) => (
          <div key={index}>
            <label>{area.area}:</label>
            <input
              type="number"
              value={area.hours}
              onChange={(e) => updateHours(index, parseInt(e.target.value) || 0)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
