import React from 'react'
import { ButtonProps } from './Button.types';

// export interface ButtonProps {
//   size?: "small" | "medium" | "large"
// }

const buttonDefaultStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContents: 'center',
  border: 'none',
  borderRadius: '4px',
};
const buttonSizes = {
  small: {
    height: '28px',
    fontSize: '14px',
    padding: '3px 16px'
  },
  medium: {
    height: '36px',
    fontSize: '16px',
    padding: '4px 20px'
  },
  large: {
    height: '48px',
    fontSize: '20px',
    padding: '5px 24px'
  },
};


const Button = (props : ButtonProps) => {
  const { children, size = 'medium', ...rest } = props;
  const buttonStyles = {
    ...rest.style,
    ...buttonDefaultStyles,
    ...buttonSizes[size],
  }

  return (
    <button style={buttonStyles}>
      {children}
    </button>
  )
}

export default Button