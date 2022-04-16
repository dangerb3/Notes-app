import React from 'react';
import classes from './MyCheckBox.module.css';

function MyCheckBox({
  children, state, callback, ...props
}) {
  console.log(state);
  return (
  //   why not working classes.MyCheckBox.active?
    <button type="button" onClick={() => callback(state)} className={state ? classes.MyCheckBoxActive : classes.MyCheckBox} {...props}>
      {children}
    </button>
  );
}

export default MyCheckBox;
