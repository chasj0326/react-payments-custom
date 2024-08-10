import React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ type = 'text', className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`input-basic ${className}`}
        autoComplete={type === 'password' ? 'new-password' : ''}
        {...props}
      />
    )
  },
)

export default Input
