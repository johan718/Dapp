import React from 'react';

import splash from '../animations/splash.gif';

function Loader(props) {
  const style = {
    display: props.loading ? 'flex' : 'none',
    top: props.top ? props.top : '-60px',
  };

  return (
    <img alt="Market Loader" className="market-loader" src={splash} style={{ ...style }} />
  );
}

export default Loader;
