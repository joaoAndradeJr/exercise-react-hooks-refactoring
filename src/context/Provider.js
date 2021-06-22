// src/context/Provider.js
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);
  const [signalColor, setSignalColor] = useState('red');

  function moveCar(car) {
    if (car === 'redCar') return setRedCar(!redCar);
    if (car === 'blueCar') return setBlueCar(!blueCar);
    if (car === 'yellowCar') return setYellowCar(!yellowCar);
  };

  function changeSignal(color) {
    return setSignalColor(color);
  };

  const context = {
    redCar,
    blueCar,
    yellowCar,
    signalColor,
    moveCar: moveCar,
    changeSignal: changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Provider;
