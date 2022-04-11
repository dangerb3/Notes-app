import React from 'react';
import classes from './MyButton.module.css';

function MyButton({ children, ...props }) {
  return (
    <button type="button" className={classes.myBtn} {...props}>
      {children}
    </button>
  );
}

export default MyButton;
