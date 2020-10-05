import React from 'react';
import { render } from 'react-dom';

import App from 'pages/routes';

const AppStore: React.FC = () => {
  return <App />;
};

render(<AppStore />, document.getElementById('app'));
