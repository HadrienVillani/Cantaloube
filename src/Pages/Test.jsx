import React, { useEffect, useState } from 'react';

function Test() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return dimensions.width < 1400 ? (
    <div
      style={{
        margin: 'auto',
        width: '50%',
        height: '50vh',
        textAlign: 'center',
      }}>
      <h1> Resize</h1>
    </div>
  ) : (
    <div
      style={{
        margin: 'auto',
        width: '50%',
        height: '50vh',
        textAlign: 'center',
      }}>
      <h1>Not Resize</h1>
    </div>
  );
}

export default Test;
