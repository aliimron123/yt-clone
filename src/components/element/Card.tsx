import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface ICardProp {
  withShadow?: boolean;
  withBorder?: boolean;
}

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ICardProp;

const Card = forwardRef<Ref, DivProps>((props, ref) => {
  const {
    withShadow = false,
    withBorder = false,
    children,
    className,
    ...rest
  } = props;

  const classNameValue = clsx(
    `bg-[#f1f1f1] w-full dark:bg-transparent  ${withShadow ? 'drop-shadow-md' : 'drop-shadow-none'} `,
    className,
  );
  return (
    <div ref={ref} className={classNameValue} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
