import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface IButtonProps {
  withIcon?: boolean;
  IconComponent?: any;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButtonProps;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    className,
    children,
    withIcon = false,
    IconComponent = <></>,
    ...rest
  } = props;

  const classNameValue = clsx(
    `flex flex-row items-center justify min-h-10 center py-1.5 px-2 rounded-lg w-full `,
    className,
  );

  return (
    <button ref={ref} type={type} {...rest} className={classNameValue}>
      {withIcon && <IconComponent className="mr-4 h-5 w-5" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
