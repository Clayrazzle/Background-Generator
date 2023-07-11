import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color1, setColor1] = useState('#008080');
  const [color2, setColor2] = useState('#800080');
  const [backgroundStyle, setBackgroundStyle] = useState('');

  const setGradient = () => {
    const newBackgroundStyle = `linear-gradient(to right, ${color1}, ${color2})`;
    setBackgroundStyle(newBackgroundStyle);
  };

  const handleColor1Change = (e) => {
    setColor1(e.target.value);
    setGradient();
  };

  const handleColor2Change = (e) => {
    setColor2(e.target.value);
    setGradient();
  };

  return (
    <div id="gradient" style={{ background: backgroundStyle }}>
      <h1>Background Generator</h1>
      <input
        className="color1"
        type="color"
        name="color1"
        value={color1}
        onChange={handleColor1Change}
      />
      <input
        className="color2"
        type="color"
        name="color2"
        value={color2}
        onChange={handleColor2Change}
      />
      <h2>Current CSS Background</h2>
      <h3>{backgroundStyle}</h3>
    </div>
  );
};

export default App;