import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);

  const moveCar = (car) => {
    if (car === 'redCar') return setRedCar(!redCar);
    if (car === 'blueCar') return setBlueCar(!blueCar);
    if (car === 'yellowCar') return setYellowCar(!yellowCar);
  };
  
  const context = {
    redCar,
    blueCar,
    yellowCar,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
