// import React from 'react';

const CondiontalRender = ({ condition, children }) => {
  if (!condition) return null;
  return children;
};

export default CondiontalRender;
