import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import EshopRegistration from './components/EshopRegistration';
import RadioButtonTest from './components/RadioButtonTest';

const App = () => {
  return (
    <div className="container">
      <EshopRegistration />
      {/*<RadioButtonTest />*/}

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
