import { useState } from 'react';

function ResizeListener() {
  const [size, setSize] = useState();
  window.addEventListener('resize', () => {
    let sizeWidth = window.innerWidth;
    setSize(sizeWidth);
  });
  if (size < 1400) {
    return true;
  } else {
    return false;
  }
}

export default ResizeListener;
