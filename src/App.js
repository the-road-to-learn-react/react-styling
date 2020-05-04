import React from 'react';

import NoStyling from './no-styling';
import CssInCss from './css-in-css';
import CssInJs from './css-in-js';
import UtilityFirstCss from './utility-first-css';
import InlineCss from './inline-css';

function App() {
  return (
    <div style={{ maxWidth: '250px' }}>
      <h1>Styling in React</h1>

      {/* Stragey 0: No Styling */}
      <h2>No Styling</h2>
      <NoStyling />

      <hr />
      <hr />

      {/* Stragey 1: CSS-in-CSS */}
      <h2>CSS-in-CSS</h2>

      {/* CSS */}
      <CssInCss.Css />

      <hr />

      {/* CSS with Sass */}
      <CssInCss.Scss />

      <hr />

      {/* CSS Modules */}
      <CssInCss.CssModules />

      <hr />

      {/* CSS Modules */}
      <CssInCss.ScssModules />

      <hr />
      <hr />

      {/* Stragey 2: CSS-in-JS */}
      <h2>CSS-in-JS</h2>

      {/* Styled Components */}
      <CssInJs.StyledComponents />

      <hr />
      <hr />

      {/* Stragey 3: CSS-in-JS */}
      <h2>Utility first CSS</h2>

      {/* Utility-First-CSS: Tailwind CSS */}
      <UtilityFirstCss.TailwindCss />

      <hr />
      <hr />

      {/* Inline CSS */}
      <h2>Inline CSS</h2>

      <InlineCss />
    </div>
  );
}

export default App;
