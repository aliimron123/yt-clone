import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  title: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  bgcolor?: string;
}

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  TooltipProps;

const Tooltip = forwardRef<Ref, DivProps>((props, ref) => {
  const {
    className,
    children,
    title,
    bgcolor,
    placement = 'bottom',
    ...rest
  } = props;

  const placementPosition = {
    left: clsx('left-3'),
    right: clsx('right-3'),
    top: clsx('top-3'),
    bottom: clsx('top-[135%] -translate-x-10  '),
  };
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative  ">
      <div
        className="relative "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {' '}
        {children}
      </div>
      <div
        className={clsx(
          ' absolute  z-40  min-w-max rounded-md bg-[#bbbaba85] px-2  py-2.5 text-xs',
          bgcolor,
          placementPosition[placement],
          isHovered ? 'visible' : 'invisible',
          className,
        )}
        {...rest}
        ref={ref}
      >
        {title}
      </div>
    </div>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
