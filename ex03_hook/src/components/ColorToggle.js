import React, { useState } from 'react';

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <p style={{ color: isRed ? 'red' : 'blue' }}>
        이 텍스트의 색상을 변경해보세요!
      </p>
      <button onClick={toggleColor}>색상 변경</button>
    </div>
  );
}

export default ColorToggle;