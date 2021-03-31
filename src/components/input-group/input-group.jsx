import React from 'react';
import classNames from 'classnames';
import Input from '../input/input';

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

const InputGroup = props => {
  /* prettier-ignore */
  const { 
    tag: Tag,
    className,
    size,
    disabled,
    addonLeft,
    addonRight,
    right,
    left,
    ...attributes
  } = props;

  // attributes.id = attributes.name;

  const classes = classNames(`input-group mb-3`,className);

  return (
    <div className={classes} {...attributes}>
        {left &&  <span className="input-group-text" id="basic-addon1">{addonLeft}</span>}
   <Input/>
   {right &&  <span className="input-group-text" id="basic-addon1">{addonRight}</span>}
  </div>
  )
};


export default InputGroup;
