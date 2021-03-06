import React from 'react';

import classes from './Backdrop.modules.css';

const backdrop = ({ show, clicked }) =>
  show && <div className={classes.Backdrop} onClick={clicked}></div>;

export default backdrop;
