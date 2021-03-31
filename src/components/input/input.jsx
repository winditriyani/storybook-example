import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  tag: 'input',
};

const Input = props => {
  /* prettier-ignore */
  const { 
    tag: Tag,
    className,
    size,
    disabled,
    ...attributes
  } = props;

  // attributes.id = attributes.name;

  const classes = classNames(`form-control`,{[`form-control-${size}`]:!!size}, className);

  return <Tag {...attributes} className={classes} disabled={disabled}/>;
};

Input.defaultProps = defaultProps;

export default Input;
